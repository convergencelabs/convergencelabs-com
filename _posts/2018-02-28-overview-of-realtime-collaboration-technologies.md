---
layout: post
title:  "How do I choose a realtime collaboration library?"
description: "There are quite a few different classes of technologies to help you build a realtime collaborative application.  Find out which is the best fit for you."
date:   2018-02-28 12:09:21 -0700
categories: [realtime-collaboration]
featured_image: /assets/images/blog/ace-collab.jpg
author: Alec LaLonde
excerpt_separator: <!--excerpt-->
---
There are quite a few different classes of technologies to help you build a realtime collaborative application.  Find out which is the best fit for you.
<!--excerpt-->
Here at Convergence Labs, we're excited to witness the increased adoption of realtime collaboration in software across the entire industry. This has given rise to a whole suite of technology solutions to help developers get their needs met, no matter the size and scale of their applications.  

Of course, Convergence is one of those technology solutions, but this post is not about selling you on Convergence.  We think it can provide a massive amount of value to a large set of people, but it's certainly not the best fit for everyone. So let's dive into a few use cases and give you a framework to make good technology provider decisions.

## Realtime collaboration or just realtime ?
The standard definition of realtime collaboration is the ability for multiple people to be able to work on the same piece of data at the same time.  This may be a rich text document, a presentation, or maybe just the text describing a task.  Many, dare I say most, applications don't have this requirement.  For example, an application that merely pulls and aggregates data in real-time (think a real-time dashboard) doesn't fit our definition of collaboration, because there's no data being written.  Even a lot of apps that are heavily write-intensive don't fit this definition, if they have been designed to allow only a single user at a time or implement "locks" or other measures to avoid conflicts.

Conversely, there are collaborative applications that are not real-time.  Git, for example, is the industry standard for collaborating on source codel, but it is by no means a real-time solution.  Two team members can't really be working on the same piece of code at once because they don't have the context to see what the other is doing _at that moment_.

This distinction is critical when evaluating third-party libraries.  If you spend six months architecting your backend around Firebase, but neglect that small co-editing feature of your app, you will be very disappointed when that feature's implementation begins and Firebase is the only option. You'll have to pull in something else, or try and roll your own, which is exceptionally difficult.  

# Types of projects

## Toy or experimental 
Engineers love playing around with new technology.  To that end, the goal of these toy projects is intellectual curiosity.  This is one reason why open source has been so successful: If something doesn't work as it appears, you can read the source! Documentation missing?  Read the source!  You can see what you are getting, and probably learn a thing or two from the source.

### [Yjs](http://y-js.org/)

description here...

| License | Popularity |
| --- | --- |
| MIT | 566 stars |


### [Automerge](https://github.com/automerge/automerge)

description here...

| License | Popularity |
| --- | --- |
| MIT | 5k stars |


### [TogetherJS](https://togetherjs.com/)

TogetherJS was a Mozilla Labs project aiming to make it "surprisingly easy" to add realtime collaboration to a website.  Essentially, it synchronizes DOM state between multiple browsers.  It is open source and provides a UI widget with text chat and rudimentary audio chat to get developers going quickly.

It has a few rather large users including [JSFiddle](https://jsfiddle.net/) and [.NET Fiddle](http://dotnetfiddle.net/).

[Mozilla Labs](http://www.mozillalabs.com/) is unfortunately no longer active, and this project is in need of a maintainer.

| License | Popularity |
| --- | --- |
| Mozilla Public License, Version 2.0 | 6k stars |


### [ShareDB (formerly ShareJS)](https://github.com/share/sharedb)

description here...

| License | Popularity |
| --- | --- |
| MIT | 1.7k stars |

### [WebStrates](https://webstrates.github.io)

description here...

| License | Popularity |
| --- | --- |
| Apache 2.0 | 73 stars |


### [SwellRT](http://swellrt.org/)

description here...

| License | Popularity |
| --- | --- |
| Apache 2.0 | 125 stars |


### [Flip](https://irisate.com/)

description here...

| License | Popularity |
| --- | --- |
| Proprietary | ? |


### Dead/retired projects

- [OT.js](https://github.com/Operational-Transformation/ot.js)
- [Apache Wave](http://incubator.apache.org/projects/wave.html)
- [Google Realtime API](https://developers.google.com/google-apps/realtime/overview)


# NOTES

Categories:
- Data sync solutions, open source, pluggable
  - 

Goal: Provide an overview of the existing solutions and categorize them.  Then go through a few use cases and apply a category to each.

Topics:
- type of project (toy? new? existing? usage? expected longevity?)
  - Toy project / experiment
  - New project or rewrite, well-funded 
  - Feature addition to large existing project
- buy vs build
- Comparison matrix
  - supported data types (plain text, rich text, JSON, etc)
  - proprietary / open source
  - group and local undo / redo
  - Transient data support (remote cursors, remote pointers)