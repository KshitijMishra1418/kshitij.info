---
layout: post
title: "Fleet Maintenance Prototype (Flask + SQLite)"
date: 2026-02-22 00:10:00 +0530
categories: projects
---

Built a working Flask-based fleet maintenance simulation system.

## Key Features

- Vehicle database (10 preloaded vehicles)
- One-click monthly maintenance task generation
- Smart technician assignment:
  - Max 3 active tasks per technician
  - Depot proximity matching
  - Workload balancing logic
- Task execution:
  - Before/after photo uploads
  - Parts tracking
  - Completion signature
- Dashboard:
  - Overdue task monitoring
  - Technician workload distribution
  - Completed task gallery

This is a prototype architecture demonstration using SQLite and Flask,
designed to simulate real-world operational workflow logic.

**Tech Stack:** Python • Flask • SQLite • HTML • CSS
