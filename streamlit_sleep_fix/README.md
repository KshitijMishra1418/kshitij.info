# Streamlit Sleep/Cold-Start Resilience Template

This folder includes a drop-in template you can copy into each Streamlit app to reduce visitor-facing errors when the app wakes from inactivity.

## What this solves
- Faster first render on cold start.
- Cleaner user messaging during wake-up delays.
- Fewer crashes caused by expensive startup work at import time.

## How to use
1. Copy `app_template.py` into your app repo as `app.py` (or merge sections into your current app).
2. Install dependencies used by your app.
3. Move model/database/client initialization into `@st.cache_resource` functions.
4. Keep top-level imports light.
5. Use `warmup()` call at startup to pre-initialize cached resources.

## Extra recommendations
- Pin package versions in `requirements.txt`.
- Remove unused dependencies to reduce boot time.
- If possible, host on an always-on plan for production traffic.
