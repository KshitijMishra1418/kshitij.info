import time
from typing import Optional

import streamlit as st

st.set_page_config(page_title="My App", page_icon="🚀", layout="wide")


@st.cache_resource(show_spinner=False)
def get_backend_client() -> str:
    """Create and cache expensive resources (DB client, model, API SDK, etc.)."""
    # Simulate expensive startup work.
    time.sleep(1.5)
    return "backend-ready"


@st.cache_data(ttl=300, show_spinner=False)
def get_cached_data() -> dict:
    """Cache expensive data fetch/transforms so reruns are fast."""
    # Replace with your real query / compute logic.
    return {"status": "ok", "ts": time.time()}


def warmup() -> Optional[str]:
    """Try to initialize critical resources without hard-crashing the UI."""
    try:
        return get_backend_client()
    except Exception as exc:  # noqa: BLE001
        st.warning(
            "The app is waking up right now. Please wait a few seconds and refresh."
        )
        st.caption(f"Startup detail: {exc}")
        return None


def main() -> None:
    st.title("🚀 Streamlit App")
    st.caption("Cold-start resilient template")

    with st.status("Starting app...", expanded=False) as status:
        client = warmup()
        if client:
            status.update(label="Startup complete", state="complete")
        else:
            status.update(label="Partial startup", state="running")

    if not client:
        st.info("Retry in 10–20 seconds if this is the first visit after inactivity.")
        st.stop()

    st.success("App is ready")

    if st.button("Load data"):
        with st.spinner("Fetching cached data..."):
            data = get_cached_data()
        st.json(data)


if __name__ == "__main__":
    main()
