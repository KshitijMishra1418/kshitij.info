---
layout: default
title: Home
---

<div style="padding:120px 20px; text-align:center;">
    <h1 class="glow" style="font-size:60px;">Kshitij Mishra</h1>
    <p style="font-size:20px; opacity:0.8;">
        AI-Focused Quality Analyst | Python • SQL • LLM Evaluation
    </p>
</div>

<hr style="opacity:0.2; width:60%;">

<div style="padding:80px 20px; max-width:900px; margin:auto;">
    <h2>About Me</h2>
    <p>
        AI-focused Quality Analyst with hands-on experience evaluating production AI models,
        analyzing structured datasets, and improving system performance through data-driven insights.
        Strong foundation in Python, SQL, LLM evaluation, and AI workflow testing.
    </p>
</div>

<hr style="opacity:0.2; width:60%;">

<div style="padding:80px 20px;">
    <h2>Core Skills</h2>

    <div class="skills-grid">
        <div class="skill-card">
            <h3>AI & ML</h3>
            <p>LLM Evaluation • Prompt Testing • Output Validation</p>
        </div>

        <div class="skill-card">
            <h3>Programming</h3>
            <p>Python • SQL</p>
        </div>

        <div class="skill-card">
            <h3>Data Analysis</h3>
            <p>Pandas • NumPy • EDA • Trend Analysis</p>
        </div>

        <div class="skill-card">
            <h3>Voice AI</h3>
            <p>Whisper • Google STT • ElevenLabs</p>
        </div>
    </div>
</div>

<hr style="opacity:0.2; width:60%;">

<div style="padding:80px 20px;">
    <h2>Experience</h2>

    <div class="card">
        <h3>Quality Associate — Tavus AI</h3>
        <p>Jan 2024 – Present</p>
        <p>Evaluated AI-generated outputs, tested LLM workflows, improved model reliability through structured evaluation.</p>
    </div>
</div>

<hr style="opacity:0.2; width:60%;">

<div style="padding:80px 20px;">
    <h2>Projects</h2>

    <div class="card">
        <h3>AI Voice & Output Evaluation System</h3>
        <p>Structured evaluation framework for AI-generated outputs.</p>
    </div>

    <div class="card">
        <h3>Crypto Market Analysis</h3>
        <p>Analyzed volatility patterns and behavioral market signals.</p>
    </div>
</div>

<hr style="opacity:0.2; width:60%;">

<div style="padding:80px 20px;">
    <h2>Daily Learning Logs</h2>

    {% for post in site.posts limit:5 %}
        <div class="card">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
    {% endfor %}
</div>
