---
layout: blog
permalink: blog/
title: Blog
---
<ul class="posts">
{% for post in site.posts %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <img src="/images/photos-blog-index/{{ post.permalink }}.jpg" alt="{{ post.title }}" />
        </a>
        <a href="">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
