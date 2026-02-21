---
layout: default
title: Home
---

<div class="hero">
    <h1 class="glow">Kshitij Mishra</h1>
    <p>AI • Systems • Intelligence</p>
    <a href="#blog" class="btn">Explore Logs</a>
</div>

<section id="blog">
    <h2>Knowledge Logs</h2>
    <div class="posts">
        {% for post in site.posts %}
            <div class="card">
                <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                <p>{{ post.date | date: "%B %d, %Y" }}</p>
            </div>
        {% endfor %}
    </div>
</section>
