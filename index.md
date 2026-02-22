---
layout: default
title: Home
---

<div class="hero">
    <h1 class="glow">Kshitij Mishra</h1>
    <p class="hero-subtitle">
        AI-Focused Quality Analyst | Python • SQL • Data Analysis
    </p>

    <div class="hero-buttons">
        <a href="https://www.linkedin.com/in/kshitij-mishra-0a5758197" target="_blank" class="btn">LinkedIn</a>
        <a href="https://github.com/KshitijMishra1418" target="_blank" class="btn">GitHub</a>
        <a href="/Kshitij_Mishra_Resume.pdf" class="btn" download>Download Resume</a>
    </div>
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
            <li>EEvaluated AI-generated voice and video outputs across production workflows to ensure quality and reliability.</li>
            <li>Analyzed large volumes of AI outputs to identify logical inconsistencies, hallucinations, and performance gaps.</li>
            <li>Improved system accuracy by providing structured, data-driven feedback to engineering and research teams.</li>
            <li>Tested LLM prompts and retrieval workflows to enhance output consistency and correctness.</li>
            <li>Supported deployment readiness by validating AI performance across multiple real-world scenarios.</li>
            <li>Collaborated with cross-functional teams to improve evaluation pipelines and reporting workflows.</li>
        </ul>
    </div>

    <div class="card">
        <h3>Relationship Manager — Urban Company</h3>
        <p><strong>Aug 2022 – Sep 2023</strong></p>
        <ul>
            <li>Analyzed customer behavior and service performance data.</li>
            <li>Maintained structured performance reports.</li>
            <li>Improved operational efficiency through data insights.</li>
            <li>Tracked and analyzed partner performance metrics to identify trends and improve service quality.</li>
            <li>Used structured data and operational insights to optimize partner onboarding and performance monitoring.</li>
        </ul>
    </div>
</div>

<div class="section">
    <h2>Projects</h2>

    <div class="card">
        <h3>AI Voice & Output Evaluation System</h3>
        <ul>
            <li>Built a structured evaluation framework for AI-generated voice and LLM outputs across production workflows.</li>
            <li>Designed validation checks to flag hallucinations, logical inconsistencies, and response degradation.</li>
            <li>Created scoring criteria and comparative test runs to benchmark outputs across prompt variants.</li>
        </ul>
        <p><strong>Tech Focus:</strong> Python • LLM Evaluation • Prompt Testing • Workflow Validation</p>
    </div>

    <div class="card">
        <h3>Crypto Market Analysis System</h3>
        <ul>
            <li>Developed a market analysis workflow to study volatility clusters, liquidity behavior, and price structure.</li>
            <li>Used Python time-series analysis with SQL-backed datasets to detect behavioral signals across timeframes.</li>
            <li>Tracked trend persistence and breakout conditions to support structured market decision-making.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python • Pandas • SQL • Data Visualization</p>
    </div>

</div>
<div class="section">
  <div class="section-head">
    <h2>Engineering Logs</h2>
    <p class="muted">Short notes on systems.</p>
  </div>

  <div class="logs-grid">
  {% for post in site.posts limit:6 %}
    <a class="log-card" href="{{ post.url | relative_url }}"
       style="animation-delay: {{ forloop.index0 | times: 80 }}ms;">
      <div class="log-top">
        <div class="log-title-wrap">
          <h3 class="log-title">
            {{ post.title }}
            {% if forloop.first %}
              <span class="latest-badge">Latest</span>
            {% endif %}
          </h3>
        </div>

        <span class="log-date">{{ post.date | date: "%b %d, %Y" }}</span>
      </div>

      {% if post.categories %}
        <div class="log-tags">
          {% for cat in post.categories limit:3 %}
            <span class="tag">{{ cat }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </a>
  {% endfor %}
</div>
