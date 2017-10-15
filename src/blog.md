---
layout: blog
permalink: blog/
title: Blog
---
<ul class="posts">
{% for post in site.posts %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <picture>
                <source data-srcset="/photos/blog-index/{{ post.photo-root }}.mobile.jpg, /photos/blog-index/{{ post.photo-root }}.mobile.2x.jpg 2x" type="image/jpeg">
                <source data-srcset="/photos/blog-index/{{ post.photo-root }}.mobile.webp, /photos/blog-index/{{ post.photo-root }}.mobile.2x.webp 2x" type="image/webp">
                {% capture jpeg %}/photos-tiny/blog-index/{{ post.photo-root }}.tiny.jpg{% endcapture %}
                <img src="{% base64 jpeg %}" data-srcset="/photos/blog-index/{{ post.photo-root }}.mobile.jpg, /photos/blog-index/{{ post.photo-root }}.mobile.2x.jpg 2x" alt="{{ post.title }}" class="lazyload" />
                <noscript><img src="/photos/blog-index/{{ post.photo-root }}.mobile.jpg" alt="{{ post.title }}" /></noscript>
            </picture>
        </a>
        <a href="">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
