---
layout: default
title: Home
---

<h1 class="glow">Kshitij Mishra</h1>
<p>AI-Focused Quality Analyst | Python • SQL • LLM Evaluation</p>

<div class="section">
    <h2>About Me</h2>
    <p>
        AI-focused Quality Analyst with experience evaluating production AI models,
        analyzing structured datasets, and improving system performance through data-driven insights.
    </p>
</div>

<div class="section">
    <h2>Core Skills</h2>

    <div class="skills-grid">
        <div class="card">
            <h3>AI & ML</h3>
            <p>LLM Evaluation • Prompt Testing • Output Validation</p>
        </div>

        <div class="card">
            <h3>Programming</h3>
            <p>Python • SQL</p>
        </div>

        <div class="card">
            <h3>Data Analysis</h3>
            <p>Pandas • NumPy • EDA • Trend Analysis</p>
        </div>

        <div class="card">
            <h3>Voice AI</h3>
            <p>Whisper • Google STT • ElevenLabs</p>
        </div>
    </div>
</div>

<div class="section">
    <h2>Projects</h2>

    <div class="card">
        <h3>AI Voice & Output Evaluation System</h3>
        <p>Structured evaluation framework for AI-generated outputs.</p>
    </div>

    <div class="card">
        <h3>Crypto Market Analysis</h3>
        <p>Analyzed volatility patterns and behavioral signals.</p>
    </div>
</div>

<div class="section">
    <h2>Daily Learning Logs</h2>

    {% for post in site.posts limit:5 %}
        <div class="card">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
    {% endfor %}
</div>
