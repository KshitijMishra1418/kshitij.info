---
layout: default
title: Home
---

<h1 class="glow">Kshitij Mishra</h1>
<p>AI-Focused Quality Analyst | Python • SQL • LLM Evaluation</p>

<div style="margin-top:30px;">
    <a href="https://www.linkedin.com/in/kshitij-mishra-0a5758197" target="_blank" class="btn">LinkedIn</a>
    <a href="https://github.com/KshitijMishra1418" target="_blank" class="btn">GitHub</a>
    <a href="/Kshitij_Mishra_Resume.pdf" class="btn" download>Download Resume</a>
</div>

<div class="section">
    <h2>About Me</h2>
    <p>
        AI-focused Quality Analyst with hands-on experience evaluating production AI models,
        analyzing structured datasets, and improving system performance through structured,
        data-driven insights.
    </p>
    <p>
        Proficient in Python, SQL, LLM evaluation, AI workflow testing, and structured reporting.
        Strong exposure to cryptocurrency market data analysis and behavioral pattern recognition.
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
    <h2>Experience</h2>

    <div class="card">
        <h3>Quality Associate — Tavus AI</h3>
        <p><strong>Jan 2024 – Present</strong></p>
        <ul>
            <li>Evaluated AI-generated outputs across production workflows.</li>
            <li>Identified logical inconsistencies and performance gaps.</li>
            <li>Improved model accuracy through structured feedback.</li>
            <li>Tested LLM prompts and retrieval systems.</li>
        </ul>
    </div>

    <div class="card">
        <h3>Relationship Manager — Urban Company</h3>
        <p><strong>Aug 2022 – Sep 2023</strong></p>
        <ul>
            <li>Analyzed customer behavior and service performance data.</li>
            <li>Maintained structured performance reports.</li>
            <li>Improved operational efficiency through data insights.</li>
        </ul>
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
