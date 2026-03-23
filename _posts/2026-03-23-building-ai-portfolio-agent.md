---
layout: post
title: "Building an AI Agent for My Portfolio using Groq + Vercel"
date: 2026-03-23
categories: ai engineering llm projects
---

# Building an AI Agent for My Portfolio — Engineering Log

Most portfolio websites are static. Recruiters visit, read, and leave.

I wanted something different:

A real-time AI agent that answers recruiter questions about me, my projects, and my skills — even when I’m offline.

So I built a lightweight production-style AI assistant using Groq API, Vercel serverless functions, and Telegram notifications.

---

# System Architecture

Recruiter opens **kshitij.info**

↓  

Clicks floating chat widget  

↓  

Message sent to `/api/chat` (Vercel Serverless Function)

↓  

Server injects system prompt + conversation history

↓  

Groq LLaMA-3.1 model generates response

↓  

Response returned to widget

↓  

Conversation transcript sent to Telegram

---

# Tech Stack

| Layer | Technology |
|------|------------|
Frontend | Vanilla JavaScript |
Backend | Vercel Serverless Functions |
LLM | Groq (LLaMA-3.1-8B-instant) |
Notifications | Telegram Bot API |
Hosting | GitHub Pages |

Goal:

Build a recruiter-aware conversational assistant with **zero infrastructure cost**.

---

# Designing the System Prompt

The system prompt defines how the assistant behaves.

Instead of acting like a generic chatbot, the agent responds **as me**.

Example identity block:

```
You are Kshitij Mishra.

You bridge the gap between AI systems and real-world reliability.
```

Rules implemented:

Salary questions → redirect to email

Availability questions → suggest contact directly

Irrelevant questions → polite redirection

Responses always end with a follow-up question

This ensures structured recruiter conversations.

---

# Backend Implementation

Serverless endpoint:

```
/api/chat
```

Responsibilities:

Receive messages from widget

Send request to Groq inference API

Return generated response

Send transcript to Telegram

Example request flow:

```
messages = [
system_prompt,
conversation_history,
latest_user_message
]
```

Stateless architecture keeps deployment simple.

No database required.

---

# Groq API Integration

Inference endpoint:

```
https://api.groq.com/openai/v1/chat/completions
```

Model used:

```
llama-3.1-8b-instant
```

Reasons:

Extremely fast response time

OpenAI-compatible API format

Free-tier friendly

Reliable multi-turn conversations

---

# Chat Widget Engineering

The widget is written using **pure JavaScript**.

Features:

Floating assistant bubble

Dark theme UI matching portfolio

Conversation memory stored locally

Quick recruiter question buttons

Auto tooltip prompt after page load

Transcript trigger on page exit

Conversation state example:

```
messages[]
```

Sent with every request.

---

# Telegram Notification Pipeline

Telegram acts as a lightweight observability layer.

Setup steps:

Create bot using @BotFather

Retrieve chat ID from @userinfobot

Store credentials in Vercel environment variables

Example notification:

```
Recruiter: Tell me about yourself

Agent: I'm Kshitij Mishra...
```

This allows real-time visibility into recruiter interactions.

---

# Deployment Workflow

Backend:

GitHub repo → imported into Vercel

Auto-deploy on commit

Frontend:

Widget added inside portfolio `index.md`

Deployment time:

~2 minutes

---

# Environment Variables

Stored inside Vercel dashboard:

```
GROQ_API_KEY

TELEGRAM_BOT_TOKEN

TELEGRAM_CHAT_ID
```

No secrets exposed inside repository.

---

# Challenges Faced During Development

### API Key Exposure Risk

Initial debugging revealed keys should never appear inside frontend code.

Resolved using:

```
process.env.*
```

inside serverless runtime.

---

### Model Deprecation Issue

Deprecated model:

```
llama3-8b-8192
```

Migrated to:

```
llama-3.1-8b-instant
```

Improved speed and reliability.

---

### Rate Limits on Gemini API

Gemini free tier caused interruptions during testing.

Switched inference provider to:

Groq API

Result:

Stable recruiter session handling.

---

### Debugging Serverless Runtime Issues

Primary debugging tools used:

Vercel Function Logs

Browser Network Inspector

Direct endpoint testing:

```
https://kshitij-ai-agent.vercel.app/api/chat
```

Used to validate:

payload structure

environment variables

response latency

error handling

---

# Performance Observations

Latency:

~400–900ms

Cold start:

Minimal

Cost:

$0 per month

Scaling:

Automatic

---

# Future Improvements Planned

Session analytics dashboard

Vector-based memory retrieval

Resume embedding search

Conversation scoring signals

Multi-agent routing

---

# Final Result

Live AI recruiter assistant running on:

kshitij.info

Capabilities:

Real-time responses

Portfolio-aware answers

Automatic transcript delivery

Zero infrastructure cost

Sub-second latency

---
