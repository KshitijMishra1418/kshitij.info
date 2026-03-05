---
layout: default
title: Engineering Notes
permalink: /notes/
---

<div class="section">
  <div class="section-head">
    <h2>Engineering Notes</h2>
    <p class="muted">A collection of short technical notes on systems, AI, data, and crypto markets.</p>
  </div>

  <div class="logs-grid">
    {% for post in site.posts %}
      <a class="log-card" href="{{ post.url | relative_url }}">
        <div class="log-top">
          <div class="log-title-wrap">
            <h3 class="log-title">{{ post.title }}</h3>
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
</div>
