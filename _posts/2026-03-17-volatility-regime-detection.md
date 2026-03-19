---
layout: post
title: Volatility Regime Detection (Crypto)
date: 2026-03-17 10:00:00 +0530
categories: projects
---

Built a Python-based system to classify crypto market conditions into volatility regimes.

## Key Features

- Historical price data processing using Pandas
- Log return calculation for stable volatility measurement
- Rolling volatility computation (standard deviation)
- Regime classification:
  - Low volatility (consolidation)
  - Medium volatility (normal trend)
  - High volatility (breakout / unstable phase)

- Dynamic thresholding based on distribution instead of fixed values
- Regime labeling for each time window

## How It Works

- Convert price series → log returns
- Apply rolling window (e.g., 20 periods)
- Compute volatility = standard deviation of returns
- Define percentile-based thresholds:
  - Lower percentile → low regime
  - Middle → normal regime
  - Upper → high volatility regime

## Why It Matters

- Helps identify breakout zones early  
- Avoids trading in low-volatility chop  
- Useful for position sizing and risk management  

## Tech Stack

- Python  
- Pandas  
- NumPy  
- Time-Series Analysis  

## Output

- Labeled dataset with volatility regimes  
- Ready for visualization or trading models  

## Next Steps

- Combine with liquidity signals  
- Add regime-based strategy logic  
- Integrate with real-time data pipeline  
