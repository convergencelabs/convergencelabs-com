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
When presented with the idea of real-time collaborative web applications, many people over the years have landed on the idea of utilizing the DOM itself as the data layer for synchronizing multiple users' browser state with one another.  The most visible implementation of this was Mozilla's TogetherJS (now unfortunately abandoned).  Co-browsing was the main goal here: what one person navigated to or clicked on would be broadcasted to all other participants immediately.  Mozilla even implemented text-level Operational Transformation (OT) to provide conflict resolution when multiple people tried to edit the same input field.

Yet in the world of web development, we've moved well beyond the days of DOM manipulation with tools like jQuery.  Most every modern web framework these days uses a virtual DOM or other abstraction layer to spit out some HTML based on changes in data.  Components take pieces of data as their input and re-render their underlying templates.  Convergence takes a similar approach: rather than dictating an application's UI (or web framework), we provide "models" which are essentially shared between participants in a particular collaboration session.  Model data changes are applied imperatively (typically from input field event listeners), and consumers register event listeners on (granular) types of changes, from which the underlying UI can be updated.  There is a flexible eventing layer separating the HTML view from the shared data.

You can certainly take a user's entire DOM and ship it over the wire for another user to render.  One could build a proof-of-concept doing exactly this in a few hours.  We've been down this path, and will spend the rest of this post discussing the various problems that just about any real-world web application will run into.

## Browser differences

We've come a looong way when it comes to browser standardization, but the reality is that browsers still don't render all content identically, and never will.  The HTML spec is growing at an incredible clip, and all browser vendors have their own agendas.  So simply taking the DOM from one user and sending it over a WebSocket connection for another user may not result in the two users actually seeing the same thing.  Application providers could of course only officially support a single browser, or disallow collaboration between users using different browsers, but this flies in the face of the goal of a cross-platform, standardized web that we've been working towards over the past decade plus.    

## Granularity: Exactly what do you *want* to share?

Traditional collaboration techniques such as screen-sharing and co-browsing suffer from the same problem of granularity: rarely do people actually want to share their *entire* or even their *entire* web page.  Accordingly, most real-world applications *don't actually want* all users to see the entire contents of each users' views.  In almost any non-toy application, different users have access to different data, with varying permissions, roles, etc.  So right away, it's clear that sharing an entire page within a web app would not be desirable.  *OK, so just share a subsection of the page, then, maybe a component or two* you might say at this point.  This can address the authorization concern, but creates its own set of problems.  For instance, modals are often created by generating a chunk of DOM and appending it as the last child of the `<body>` element.  In this case, the application would have to explicitly identify this new DOM element and send its structure over the wire, adjacent to the DOM of any existing components.  Not a huge deal, but it's easy to see how this approach can end up becoming intractable.  Not to mention how front-end development has been moving farther and farther away from the DOM over the past six years (see React, Vue, etc) and towards various Virtual DOM implementations.  Modern front-end development is being increasingly abstracted away from the fundamental browser constructs (HTML, CSS and even Javascript), to the extent that developers often have no idea what the resulting HTML is after post-processing! 

## Challenges with hierarchies

Hierarchical data is notoriously difficult to synchronize.  Depending on the depth of nesting, activities like reparenting and moving nodes to siblings can affect the whole hierarchy in unexpected ways.  This is why Rich Text data, while conceptually simple, is so difficult to resolve conflicts on.  The system not only needs a formal definition of correctness with the underlying data format to prevent erroneous states, but it must also know how parent nodes can affect their descendants. HTML, for all its ubiquity, is not well-defined, with different rendering engines making different decisions on how particular DOM states should be rendered.

## Presentation versus Data

The Model-view-controller (MVC) software architectural pattern (and its many variants) dictates a distinct separation of view (presentation) and model (data).  Despite it's name, the DOM is very much in the presentation layer.  Clearly, an administrator's DOM will be different than a normal user's; they will have numerous additional functionality and abilities, and as such their interfaces will differ to some extent. 

### Footnote
As always, we're eager to hear any examples (or counterexamples) of this out in the wild.  [Reach out](mailto:contact@convergencelabs.com) and we'll update this post accordingly!