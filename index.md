---
layout: default
title: Home
---

<h1 class="glow">Kshitij Mishra</h1>
<p>AI • Systems • Intelligence</p>

<hr>

<h2>Knowledge Logs</h2>

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
