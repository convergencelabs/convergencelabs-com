---
layout: post
title:  "Building Real Time Collaborative Apps"
description: Over the last five years there’s been a huge amount of activity around developer tools for realtime applications. The tools for realtime collaborative editing, however, haven’t kept pace. We discuss what’s required to build an effective realtime collaborative application.
author: Alec LaLonde
date:   2017-02-05 15:09:21 -0700
categories: [realtime collaboration]
featured_image: /assets/images/blog/car-schematic.jpg
---

Over the last five years there’s been a huge amount of activity around developer tools for realtime applications. In 2012 Firebase took frontend developers by storm, showing how easy it could be to synchronize data in real time across myriad devices and platforms. A whole cadre of supporting tools such as Pusher and RethinkDB started addressing the new needs of real time app developers with first class support for things like data streams and asynchronous messaging. These are wonderful tools that have significantly raised the bar for what a web application is expected to do.

The tools for real time collaborative editing, however, haven’t kept pace. With these types of applications, shared mutable state is the most difficult technical problem to solve, and there are a few solutions out there that help, such as the Google Realtime API and ShareDB. However, once you start building an app out, you come to the realization that there’s so much more involved. An engine is great to start with, but building out the suspension, brakes and exhaust system from scratch takes a whole lot of time.

We’ve spent the past six years building realtime, collaborative applications and have learned a whole lot along the way. Each time we built an app we noticed that we were repeatedly building the same things over and over. We started with a shared mutable state engine, but quickly realized that the engine alone simply enabled people to edit things at the same time. There was still always a ton of additional work to enable a satisfying user experience, and building out these crucial features typically involved the time consuming process of either building things from scratch or gluing together many different tools. Third-party tools never quite integrated properly, so we ended up building out a suite of services that we would use again and again – this became the core of the platform we are calling Convergence.

So, you might ask, what does it take to build an application that delivers usable and effective realtime collaboration? Let’s break it down.

# Shared Mutable State

This is the first roadblock, no, WALL that people hit when they first start down the path of simultaneous editing. How do you handle edit conflicts without locking the document? Well, if you don’t want to dedicate a couple years of your life to concurrency-control algorithm research, you use a third-party solution. This remains a lively debate in modern Computer Science – [we’ve been at the forefront](https://dl.acm.org/citation.cfm?id=2558861) of research in this domain for five years, so rest assured we’ve come up with an exhaustively tested solution for most types of data (if it can be modeled in JSON, chances are we can handle it). We’re actively working on first-class support for additional data types (such as Rich Text) as well, so stay tuned.

# Users and Identity

Any application with collaboration as a first-class construct will need a rich set of features around Users and Identity. Unlike most apps, there is an implicit trust between different users working on the same thing at the same time. Your app will need to facilitate the UX to make co-editing seamless, but a user can base a lot of her interaction with another person on a contextual understanding of _who they are_. Therefore, a User is necessarily a first-class citizen in Convergence.

# Authorization

To maintain the trust relationship between users, the application needs a way of limiting _who_ has access to _what_. Your app may have multiple documents or workspaces, and you probably don’t want every user to be able to interact with every other user in the system. And managing read/write access is critical to minimize collaboration conflicts.

# Presence

Just about every application with built-in chat has included some sort of visual indicator for users that are available. It’s the ages-old “buddy list” concept. Basically, a user’s connectivity status must be streamed in real-time so that everyone knows who is available (or not) for communication. Additionally, how many people have used Firebase to implement presence, and then built out the same data model on top of it to handle additional state like a user’s status or “away” message? Convergence provides a high-level API so you’re not reinventing the wheel.

# Collaboration Awareness

With collaborative apps, though, chat is only a small piece of the puzzle. Each user needs to know _not just who is online_, but _who is working on what_. This might be a user’s cursor in a text document or a selected rectangle in a flowchart. Displaying other users’ mouse pointer locations (perhaps with a color matching their name in the collaborators list) helps with conflict avoidance: if you can see that Randy has just selected a circle in the flowchart, you’re not going to change the circle’s text at the same time (unless you’re trying to tick him off!) Ask any remote worker: There is a massive amount of context lost when people are no longer in the same physical space. Therefore, realtime collaborative applications need to build in as many social cues as possible. We believe that these apps can be designed such that this virtual collaboration is at least as productive as an in-person one, and we provide two sets of APIs to help achieve this. One is tied to the actual data being acted on (such as a selection), and the other is not (such as a mouse pointer moving). Both are critical for a productive user experience in any collaborative app.

# Messaging

There are a lot of ways to communicate virtually in real-time these days, but most apps have some sort of chat functionality built-in. We provide a high-level Messaging API so you can hook up chat in minutes.

# Long-term Maintenance

Once your app grows to the point that you need to start think about scaling, the infrastructure around managing shared state gets increasingly more difficult to design and maintain. You can hire a seasoned SysAdmin to do it, but chances are he’s never had to do it with a realtime collaborative app before. The gotchas may bring you back to the drawing board more times than you’d like. Even before scaling even enters your mind, storing data inevitably opens up a whole host of risks around security and reliability. We’re in the business of providing infrastructure — let us handle it.

#### Putting it all Together

Convergence provides the ONLY suite of APIs specifically designed for the rapid development of realtime collaborative functionality. We’ve talked with companies that could have shaved _years_ (yes, years, that’s not hyperbole) off their product development with something like Convergence. What could it be worth to you?

* * *

_Also published on [Medium](https://medium.com/convergence-labs/building-realtime-collaborative-applications-214e253b6841)._