---
layout: post
title:  "Guest post: Finding the only suitable realtime collaboration API"
description: "One of Convergence's early alpha users reports on navigating the realtime collaboration API landscape and choosing Convergence to build out a complex app."
date: 2018-04-06
categories: [realtime collaboration, guest posts]
featured_image: /assets/images/blog/corkboard.jpg
author: Jochen Kamuf
crosspost_to_medium: true
---

_During our alpha release stage, we had a variety of different users build different applications with rather varying requirements.  One of our early users, Jochen, had an interesting journey to get to a working solution, so we reached out to him to talk about his experience.  Jochen, a German native, is not a native English-speaker, so we have done some copy editing but otherwise left his story intact._

"I am Jochen Kamuf, a former Computer Science student in Germany.  I decided to write my master thesis about how a personal information management application could be expanded to be multi-user and collaborative. In order to prove my theoretical analysis of how a group of people could share their information and work collaboratively on a digital corkboard, I decided to program a working prototype that implements my theoretical aspects. Of course I would use my already developed app for personal information management as a template.

This meant that I had my web application that was built to be used by a single user. Of course the payload data (the managed information) was already saved on a remote server and a simple user authentication method was already implemented.  My supervising professor reminded me that my goal of the thesis is _NOT_ to develop a realtime API and that I should not try to reinvent the wheel.  He was right; my goal was to research how personal diagrammatic information management could be usefully implemented as collaborative information management and to build a prototype to prove my assumptions.

In the beginning I thought it would be easy.  Because my data model was already object-based I thought I just needed to find some API that takes care of the distributed access rights and the correct merging of a shared data object. I decided to write one chapter that analyzes the challenges in designing real-time collaborative software. Then I gathered the most important functional and non-functional requirements to implement real-time into my already existing web app.

> This personal support was not something that I would have got while using any other framework.

After that I would search the internet for working realtime APIs and select the most promising ones to implement a very short proof of concept, to show that the framework could fulfill my requirements. Of course I wanted a realtime API that is already functional and not only based on a whitepaper. So not a low-level library, but a fully developed API including a data model, access rights and user management.  Then I would weigh the pro and cons and decide on a framework.

This is the step in my thesis when the Convergence Realtime API came into play. To find realtime frameworks I searched Google and found [a thread on Quora](https://www.quora.com/What-are-good-frameworks-for-real-time-collaboration-in-a-web-application) where someone had already asked the question "What are good frameworks for real-time collaboration in a web application?"  The user _Alec LaLonde_ replied with a pretty good list and explanation of high level RT frameworks. He also mentioned the Convergence framework which he had helped build.

I decided to give the following high level APIs a closer look (which is pretty close to the list provided in Alec's answer in Quora):

* *Apache Wave*:  no official release
* *Firebase*:  lacked the functionality to resolve conflicts when editing the same element at once
* *Mozilla TogetherJS*:  lack of node based access rights and the lack of a data model
* *ShareDB*:  lack of a built-in user management and access management system
* *SwellRT*:  no node-based sharing
* *Google Realtime API*:  too simple user/node-based sharing

In general I try to use products that are the most mature and have the biggest community. So I thought I would start with the Google Realtime API, while the newcomer Convergence would be on the bottom of my list to evaluate.

Not every framework has built-in synchronization for textual data. One requirement was that if two users were working on an information element and there is a logical merged state that the app does it automatically ( Convergence and Google do that well ).  Others claim but in reality they did not perform well.

I attempted a proof of concept with the Google Realtime API but it lacked realtime object-based permissions and sharing. One could share either the whole RT object or nothing, with no options in-between.  And with a separate RT document for every object (for each note on a corkboard) it would lead to _n_ http connections, because the API is designed for one RT document per app. So no RT framework so far was really suitable, emergency solution could be SwellRT or ShareDB but manually changing the framework would be needed.

Convergence was the last one on my list and I tried it. It was the only framework that had a similar intuitive API as the Google Realtime Framework. This means without a big overhead and changing my current app it was possible to use my already existing data model and use the API to give different users collaborative access to it. And the big downside of Google API, where a whole web app consists of one single RT object was not a problem in Convergence because I could create _n_ RT objects and all of them exchange data with the Convergence server through a single websocket.

One crucial part was missing in Convergence: When I started implementing my proof of concept prototype it was not possible to give permissions for a single RT object. That means similar to Google API a user owns either all or none of the object. If this one missing feature would be added, then Convergence would be the choice framework. So I contacted the developers, stated my requirements and got a fast response that they "are in the process of implementing the model level authorization right now!"

> I could use it on a production-sized demo of my application without experiencing any major bugs.

So I choose Convergence and trusted that the missing feature will be delivered before I have to deliver my thesis. After a few weeks the Convergence team introduced the model-level authorization feature and supported me in changing my code to use it.  At this moment I was sure that I would implement my whole thesis prototype with Convergence.

With this model level authorization feature, Convergence was superior to all the other examined frameworks. While I was implementing it was also very handy for me that the developer team was always reachable with Skype or email and I could just drop a line if I found a bug and they fixed it ASAP. I also requested more than one new feature that they also implemented.

This personal support was something that I would not have got by using any other framework.
I also have to mention that I joined a private alpha and when I finished my development the Convergence framework was still in the alpha state, but I could use it on a production-sized demo of my application without experiencing any major bugs.

In the summary of my thesis I also ran a performance analysis and compared the scalability of my single user app to the one with added RT capability and was happy to see that Convergence did not significantly slow my app down even when I created artificially large data sets.

Now that my thesis is finished and I could use the Convergence framework to successfully implement the collaboration feature to my corkboard app.  I want to thank Michael MacFadden and Alec LaLonde for their constant support and interest in my thesis implementation.
