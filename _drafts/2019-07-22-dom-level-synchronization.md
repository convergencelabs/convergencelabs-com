---
layout: post
title: Why we don't recommend DOM-level synchronization 
description: "While utilizing the DOM as a web-layer abstraction is appealing, in real-world applications it usually isn't sufficient.  We go into some detail about why this is the case."
date: 2020-06-09 10:21:01 -0700
categories: [architecture]
featured_image: /assets/images/blog/convergence-de.png
author: Alec LaLonde
crosspost_to_medium: true
---
Recently we had a large company approach us with the goal of graudally including real-time collaboration (RTC) functionality into their suite of internal and client-facing applications.  

When presented with the idea of real-time collaborative web applications, many people over the years have landed on the idea of utilizing the DOM itself as the data layer for synchronizing multiple users' browser state with one another.  The most visible implementation of this was Mozilla's TogetherJS (now unfortunately abandoned).  Co-browsing was the main goal here: 

## Browser differences
We've come a looong way when it comes to browser standardization, but the reality is that browsers still don't render all content identically, and never will.  The HTML spec is growing at an incredible clip, and all browser vendors have their own agendas.  So simply taking the DOM from one user and sending it over a WebSocket connection for another user may not result in the two users actually seeing the same thing.  Application providers could of course only officially support a single browser, or disallow collaboration between users using different browsers, but this flies in the face of the goal of a cross-platform, standardized web that we've been working towards over the past decade plus.    

## The problem with granularity
Most real-world applications *don't actually want* all users to see the entire contents of each users' views.  In almost any non-toy application, different users have access to different data, with varying permissions, roles, etc.  So right away, it's clear that sharing an entire page within a web app would not be desirable.  *OK, so just share a subsection of the page, then, maybe a component or two* you might say at this point.  This can address the authorization concern, but creates its own set of problems.  For instance, modals are often created by generating a chunk of DOM and appending it as the last child of the `<body>` element.  In this case, the application would have to explicitly identify this new DOM element and send its structure over the wire, adjacent to the DOM of any existing components.  Not a huge deal, but it's easy to see how this approach can end up being intractable.  Not to mention how front-end development has been moving farther and farther away from the DOM over the past six years (see React, Vue, etc) and towards various Virtual DOM implementations.  Modern front-end development is being increasingly abstracted away from the fundamental browser constructs (HTML, CSS and even Javascript), to the extent that developers often have no idea what the resulting HTML is after post-processing! 

## Presentation versus Data
