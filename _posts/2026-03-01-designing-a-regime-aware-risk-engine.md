---
layout: default
title: "Designing a Regime-Aware Crypto Risk Engine (Python + SQL)"
date: 2026-03-01
---

# Designing a Regime-Aware Crypto Risk Engine (Python + SQL)

Crypto markets are nonlinear systems.  
Volatility clusters. Liquidity fragments. Cascades accelerate.

Instead of predicting price, I built a regime-aware risk engine that detects structural instability using statistical signals and state transitions.

---

## System Architecture

### 1. Data Layer

OHLCV data stored in SQLite with indexed time-series access.

```sql
CREATE TABLE ohlcv (
    symbol TEXT,
    timestamp DATETIME,
    open REAL,
    high REAL,
    low REAL,
    close REAL,
    volume REAL
);

CREATE INDEX idx_symbol_time 
ON ohlcv(symbol, timestamp);

Indexed queries allow efficient rolling-window extraction.

Feature Engineering (Vectorized in Python)

All calculations are fully vectorized using Pandas.

Log Returns

r_t = ln(P_t / P_{t-1})

Rolling Volatility (20-period)

Short-term vs long-term volatility ratio:

VR = sigma_short / sigma_long

Trigger condition:

VR > 1.5 → Volatility expansion

ATR Expansion

True Range:

TR = max(H-L, |H-C_prev|, |L-C_prev|)

Expansion detected when:

ATR_current > 1.8 × ATR_30_avg

Liquidity Displacement Ratio

LDR = Volume_current / Volume_30_avg

Detects abnormal participation or liquidity vacuum.

Stateful Regime Classification

Instead of independent signals, the system uses a finite state model.

States:

Accumulation

Expansion

Distribution

Panic

Example transition logic:

If VR > 1.5 and LDR > 1.3 → Expansion

If Drawdown > 8% and VR > 2 → Panic

This prevents noisy regime flipping.

Composite Risk Score

Risk Score = weighted(VR, ATR_expansion, drawdown_depth)

Normalized to 0–100 scale.

The goal is not prediction.

It is structured instability detection.

Engineering Insight

Markets behave like distributed systems under load:

Liquidity = throughput

Volatility = load spike

Liquidations = cascading failure

Regime shifts = state transitions

Risk awareness > price prediction.
