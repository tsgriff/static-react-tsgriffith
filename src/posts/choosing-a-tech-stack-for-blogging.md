---
layout: blog
title: Choosing a Tech Stack for Blogging
date: 2018-02-12T23:49:12.000Z
categories:
  - blogging
  - tech
tags:
  - blogging
  - wordpress api
  - tech
---
I had a lot of fun figuring out how to develop this blog. At various points I wavered between something as simple as creating a templated blog on Blogger, notwithstanding the ".blogspot" domain, to something as complex as building the entire thing from scratch, i.e. a full-stack app utilizing ReactJS on the frontend and Node and SQL on the backend. Of course, the end result is something in the middle.

I liked the idea of coding my own blog entirely from scratch, but after thinking about the complexities I realized that it would hinder me from being able to focus as much on writing as I'd like. There would have to be two apps: a frontend that would render my posts and serve as the user interface and a content management system for handing the backend data. Yes, I could just query the database directly with posts and updates, but that would get incredibly tedious. A CMS would be a good time investment.

However, I just wanted to start writing. WordPress was the top recommended blogging platform and there are options for customizing templates, but I'm not a Wordpress developer (i.e. I haven't spent much time with PHP) and the customization seemed clunky. However, I am a developer, I want to be able to jump right in and take ownership of my blog, both with the content and the code, with a tech stack that I will use on the job. I want to express myself entirely, through writing and designing the frontend. This will allow me to not only blog, but to use my blog as a portfolio piece as well.

After a decent amount of research, I found the perfect tech stack for this blog (well, at least for now). I'm combining my own custom React/Redux frontend app with the WordPress API. This allows me to use the WordPress dashboard to write and edit posts and render them on my own app. I'm grateful for the WordPress dashboard, it makes content management easy and it allowed me to just dive into writing with the content being spit out to an ever-evolving application of my own design.

Resources that I found helpful:

"Launch a WordPress Website with Amazon EC2" by Amazon Web Services

http://amzn.to/2ezq6Xp

"How to Build React apps on top of the WordPress REST API" by Andrey Pokrovskiy

http://bit.ly/2BWa8FC
