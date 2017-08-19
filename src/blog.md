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
                <img src="/photos/blog-index/{{ post.photo-root }}.tiny.jpg" data-srcset="/photos/blog-index/{{ post.photo-root }}.mobile.jpg, /photos/blog-index/{{ post.photo-root }}.mobile.2x.jpg 2x" alt="{{ post.title }}" class="lazyload" />
                <noscript><img src="/photos/blog-index/{{ post.photo-root }}.mobile.jpg" alt="{{ post.title }}" /></noscript>
            </picture>
        </a>
        <a href="">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
