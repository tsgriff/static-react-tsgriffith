---
layout: blog
title: Learning the Usefulness of Software Testing Using Protractor
date: '2018-04-30T18:30:20-07:00'
categories:
  - Technology
  - QA
tags:
  - protractor
  - angular
  - selenium
  - jasmine
  - e2e testing
---
Over the last month in my new job, I've come to learn why testing is so important. I'm a frontend QA Engineer dealing specifically with a large Angular application that handles client data and payments. Designing and writing end-to-end (e2e) automated tests ensures that the functionality of the interconnected parts in an app remain running smoothly with each added feature and edit.

I had little exposure to testing before this job - my education mentioned it and we used prewritten tests for exams, but it wasn't a required part of the curriculum. I learned that Test Driven Development (TDD) has been becoming more popular on dev teams, but I unfortunately didn't have the time to spend learning how to write tests. I am so glad I have now.

My previous impression of tests was that they were there to make sure the right data was being grabbed and that individual functions were doing their job. This is a responsibility of unit tests, but I had never heard of e2e testing and this is what I primarily handle in my frontend QA role.

Angular has an e2e testing framework called Protractor, which utilizes Jasmine testing syntax and Selenium for web browser user automation. Basically, you guide the browser on what it should do and then give it conditions in order for the test(s) to pass. The browser often traverses custom workflows in order to get to a set of expectations so features that have been layered on top of one another (e.g. user signing up, logging in, and submitting a payment) will be tested in not only their individual functionality, but whether or not they work in conjunction with one another.

Eventually a large web of these tests and workflows are put in place to cover the whole of the application and all of the conditions that the user will face (or, as many as were thought of). Each time a feature is altered or added, this whole suite of tests can be run to make sure that each change didn't break something unexpectedly down the pipeline of code.

Protractor allows for automated testing with this ecosystem of tests covering the whole of the application. I can imagine how tedious and difficult manually testing the app with each new feature or edit would be so I'm thankful for this automated solution.

End-to-end testing is vital to a well-functioning large-scale app and I'm glad to have learned it. Even when I do development, I keep e2e tests in mind (write them as well) and have more knowledge about the potential ramifications of the code I write from the experience I'm gaining in QA. My role is a blend between QA and development - which is a great place to be for strengthening my software engineering skills.
