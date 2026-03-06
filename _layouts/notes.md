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

  <div class="notes-list">
    {% for post in site.posts %}
      <a class="note-item" href="{{ post.url | relative_url }}">
        <div class="note-meta">
          <span class="note-date">{{ post.date | date: "%b %d, %Y" }}</span>
        </div>

        <h3 class="note-title">{{ post.title }}</h3>

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
