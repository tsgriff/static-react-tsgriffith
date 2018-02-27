---
layout: blog
title: The Case for Static Site Generators
date: 2018-02-27T03:39:19.823Z
categories:
  - blogging
  - technology
  - jamstack
tags:
  - jamstack
  - static site generator
---
In the my last post I thought I had decided on a pretty good tech stack to use for my blog. It was an extension of my personal site, which was a dynamic web application built with React and Redux with WordPress as a detached CMS and blog posts retrieved through the WP-API. My next project was to research search engine optimization (SEO) since I vaguely knew that modern JavaScript apps were problematic for SEO. This culminated in not only changing the tech that this site is built upon, but also my first open-source contribution on GitHub.

&nbsp;

As I dove deeper into blogs that developers built and were using I noticed a pattern: they were simple in design, fast, and the term "static site" came up often. Hearing "static site" made me think of the origins of websites with each page rendered with basic HTML and CSS and rigid, without the seamless, smooth transitions of dynamically rendered apps we've grown accustomed to in today's web ecosystem. Here's a description of each:

&nbsp;

<h2 style="font-weight: bold">**Static**</h2>

&nbsp;

With static sites, what you see is what you get. There are no opportunities for user interaction other than routing to different pages. The files are display exactly how they are stored, they exist to display information, not to be dynamic and interact with the user and data. By default, this is a fast process because the site does not have to interact with a server. It just exists and doesn't have to use my computational power.

&nbsp;

**Dynamic**

&nbsp;

By definition, dynamic sites allow user interaction. They are complex applications that are meant to process an exchange between the user and the site and, often, a server and database(s). 

&nbsp;

**Why use a static site over a dynamic one?**

&nbsp;

1. Faster. All of the data is ready to be displayed as soon as the user loads the site and it does not need to change. This is a huge benefit for search engine optimization.
2. More secure. Static sites are self-contained and don't have to continually open doors for communication with the server (these openings are potential places for hackers to break into the system and inject malicious code). 
3. Simpler. Perhaps one of the biggest advantages is the simplicity of the tech used. No server and databases eliminates a lot of complexity that comes with web development, thereby improving developer experience and the ability to keep the website well-maintained and functioning properly (especially under heavy load).
4. Free hosting! Without a server, it's a lot easier to host for free (I use and recommend Netlify).

 &nbsp;

Because of these reasons, static sites have been making a comeback in the form of static site generators. These are frameworks for building static sites on top of modern languages and even frameworks, such as JavaScript and React-Static. Static site generators fall under the  "JAMstack" acronym which stands for Javascript, APIs, and markup. Any dynamic programming on the client-side is handled with JavaScript (including frameworks or libraries such as React), APIs to handle any server or database operations (rather than a CMS like WordPress), and markup (HTML and CSS) that is already built before the website is rendered.

&nbsp;

Of course, the JAMstack is not for every website, but the modernized version of static sites is incredibly useful in certain situations where user interaction with a complex web app is not necessary. This site is a perfect example and I will describe my experience and what I'm using in my next post.

&nbsp;

Resources:

&nbsp;

"Static and Dynamic Websites: There's a Difference" by Pluralsight

<https://goo.gl/pS5pne>

&nbsp;

"An Introduction to Static Site Generators" by Eduardo Bouças

<https://goo.gl/H9uoVR>

&nbsp;

<https://jamstack.org/>
