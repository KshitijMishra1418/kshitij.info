---
layout: default
title: Engineering Notes
permalink: /notes/
---

<section class="notes-page">
  <div class="container">
    <div class="section-label">Writing</div>
    <h1 class="section-title">Engineering Notes</h1>
    <p class="notes-intro">
      Short technical notes on AI systems, data pipelines, crypto market structure, and engineering workflows.
    </p>

    <div class="notes-list-page">
      {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
      {% for post in sorted_posts %}
      <a class="note-row" href="{{ post.url }}">
        <div class="note-row-left">
          <time class="note-date">{{ post.date | date: "%b %d, %Y" }}</time>
          <h2 class="note-title">{{ post.title }}</h2>
          {% if post.tags %}
          <div class="note-tags">
            {% for tag in post.tags %}
            <span>{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
        <span class="note-arrow">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
