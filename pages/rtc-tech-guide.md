---
layout: evergreen-post
title:  "Choosing a realtime collaboration library"
description: "There are a number of open source and commercial software libraries, frameworks and APIs out there to help you add realtime collaboration to your app.  In this guide, we give you both a rundown of the available technologies as well as some often overlooked considerations to help you make better technology decisions."
author: alec
permalink: /realtime-collaboration-technology-guide/
featured_image: /assets/images/shelf_books.jpg
generate_subnav: true
---
_Last updated January 2020_

Here at Convergence Labs, our mission is to accelerate the adoption of realtime collaboration (RTC) in software across every industry. To that end, we'd like to discuss a few technology solutions to help developers get their needs met, no matter the size and scale of their applications. 

[Convergence](https://convergence.io), of course, is one of those technology solutions, and naturally our favorite.  We think it can provide a massive amount of value to a large breadth of projects, but it's certainly not the best fit for everyone.  So in this guide we're going to go into some depth about the most widely-used techologies for building real-time collaboration functionality.  And like any good guide, we'll start with the end in mind by asking a few high-level questions to make sure _you're building the right thing to begin with_.  So let's dive into your project requirements so you're able to make good technology decisions.

# High-level considerations
There are a ton of factors to consider when planning a software project.  Some, like which programming languages or frameworks to choose, are common to every project, but many are specific to realtime collaborative software.  We'll mainly focus on the latter.

## Do you actually _need_ realtime collaboration?
The standard definition of realtime collaboration is the ability for multiple people to be able to work on the same piece of data at the same time. This could be a rich text document, a presentation, or maybe just some text describing a task. However, _most applications don't actually have this requirement_. For example, an application that merely pulls and aggregates data in real-time (think a real-time dashboard) doesn't fit our definition, because there's no data being written. Even a lot of apps that are heavily write-intensive don't fit this definition, if they have been designed to allow only a single user at a time or implement "locks" or other measures to avoid conflicts.

Conversely, there are collaborative applications that are not real-time.  Git, for example, is the industry standard for collaborating on source code, but it is by no means a real-time solution.  Two team members can't really be working on the same piece of code at once because they don't have the context to see what the other is doing _at that moment_.

This distinction is critical when evaluating third-party libraries. If you spend six months architecting your backend on a certain platform, but neglect considering that small co-editing feature of your app, you will be very disappointed when that feature’s implementation begins and your chosen platform doesn’t support it. You’ll have to pull in something else, or try and roll your own, which is exceptionally difficult.

## Unique constraints for realtime collaboration 
So you've determined that true real-time collaboration is a requirement for your application.  Congratulations, you're ahead of the curve already!  RTC is still an emerging space, so let's address a few unique constraints that you may not have had to consider before:

- Data models. The *shape* of your data heavily affects the difficulty of managing state between multiple users.  For example, one of the most common types of data, rich text, has yet to see a RTC implementation that supports a wide variety of off-the-shelf rich text editors.    [A](#yjs) [lot](#convergence) of libraries have focused on supporting data that can be represented by JSON, but make sure you read the documentation closely to make sure it will support the data constructs your app will require.
- Networking infrastructure.  By definition, RTC requires communication between multiple remote machines.  This [doesn't have to](#swellrt) follow a client-server pattern, but from the very beginning you'll have to worry about things like data security, guaranteed uptime, and scalability.  

## Supported platforms

This article will be primarily focused on web-compatible solutions, for a variety of reasons: 

- We know it well and it has by far the most options 
- It is the most ubiquitous application delivery platform on the planet
- Everybody has a web browser in their pocket and can thus be a potential user

Please [contact us](mailto:contact@convergencelabs.com) if you're interested in hearing about other real-time collaboration solutions available for other platforms and programming languages. 


## Types of projects

_What_ exactly are you building?  Will it actually have users?  How many?  The bigger and longer-term the project, the more important the choice of underlying technology.

### Play/experimental 
Engineers love playing around with new technology.  To that end, the goal of these toy projects is intellectual curiosity.  This is one reason why open source has been so successful: If something doesn't work as it appears, you can read the source! Documentation missing?  Read the source!  You can see what you are getting, and probably learn a thing or two from the source.

For curiosity-driven projects, check out [Automerge](#automerge) or [Yjs](#yjs) for a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) or [OT](https://en.wikipedia.org/wiki/Operational_transformation)-based open source RTC solution, respectively. The underlying algorithms are quite interesting, and you can get a simple app up and running quickly.

### Startup MVPs
Startups live and die by their speed of execution.  Yet MVPs are typically developed on a shoestring budget.  Technical founders need to be able to leverage existing technology, with a balance between off-the-shelf utility and speed of integration.  Cost is another critical concern. 

We've directly worked with two types of startups in this space: those with real-time collaboration as a core feature, and those treating it as an add-on differentiator.  

### RTC as a core product capability

If your product was originally designed with realtime collaboration at its core, you'll have a more difficult decision as the stakes are high.  Poor technology choices can massively delay shipping, limit long-term feature possibilities, or both. Here are some of the options: 

- Roll your own.  Ten years ago, this would be the norm, but with more and more off-the-shelf service providers emerging and gaining market share, this is becoming an increasingly difficult decision.  There could be a strong argument towards needing to gain deep domain knowledge in order to make long-term architecture decisions, and building your own system would force you and your team to gain this knowledge.  That road is long, expensive and fraught with mistakes, but with the right combination of talent and commitment it would be the right call.  
- Embed a [RTC sync library](#Sync). This is often the first path for many projects, because it's usually quick to build a proof-of-concept.  However, as we've mentioned above, the difference between a PoC and battle-hardened, scalabale, production-grade RTC solution is _massive_.  If you go this route, make sure you perform robust consistency and performance testing before going live.  
- Deploy a [ready-made RTC backend](#Full-backend).  Certain features such as local undo, change history, and model playback require the RTC system to not just synchronize changes in real-time, but persist them as well.  These backend solutions bundle a database alongside a real-time sync server to provide a unified offering to meet most, if not all your application's UX needs.  Of course, keep in mind what makes for a [greate collaborative editing experience](/blog/2017/09/what-makes-for-a-great-collaborative-editing-experience/), ensuring that the chosen backend provides for it.

Regardless of your leanings, we'd recommend [consulting with an expert](/contact) in the space before making any irreversible decisions. 

### RTC as a differentiating product feature

For a lot of companies, RTC support could be added to certain aspects of their products where users are most often working on the same data at the same time. It’s not a mission-critical feature but mainly a differentiator from competitor products.

The choices are the same as in the previous section, but where risk management is more important.  If RTC is being offered as a nice-to-have, it's not worth risking a single-user's experience of the core product.  So, stability and architectural decoupling are chief concerns.  The good news is that almost any web-based application can be architected such that RTC support can be provided on an opt-in basis, where the required client-side libraries are only fetched on demand and application state is hoisted from the user's browser to a RTC sync engine.  Clearly, there is a lot to consider here, so we recommend [consulting with an expert](/contact) at this stage of architecture planning.

Regardless of your chosen RTC solution, design your system such that a user's experience is minimally impacted by any potential failure of your RTC technology. This means keeping the RTC data flow separate from the core application's.  If there is downtime or a disconnection, you can just display a warning message and switch over to the default single-user mode. 

## Further considerations

While having access to the code is undeniably valuable, open-source software libraries often run into some common problems as projects mature and their requirements change.  Any experienced software architect is already aware of these tradeoffs, but here they are:

- The "Tip of the Iceberg" Effect: Home-grown, single-maintainer projects tend to put the vast majority of documentation on getting developers started, and that's it.  You can get a nice whiz-bang demo running with the simplest possible use case, but it doesn't take long until you're running into problems that weren't anticipated by the original author(s).  A few months later, and you're as much of an expert on the codebase as the original author, and you've accidentally inherited a codebase that you now realize only addresses 20% of your project's needs.
- Scalability and Growth: Web-based software is getting increasingly complex, and many RTC sync libraries weren't designed to accommodate the demands of modern web applications: Multiple integrated third-party and home-rolled systems, robust security, rapid scaling, etc.  Especially in the RTC space, a lot of solutions have come out of academia and haven't seen much exposure in real-world, commercial settings. Even with the recent renaissance in auto-scaling DevOps infrastructure, _designing_ scalable software is still extremely difficult. 
-	Support: Most open-source products aren't backed by companies, and thus don't offer [dedicated support](https://convergence.io/support).  While the larger projects enjoy a [dedicated, active community](#sharedb), some may be completely unresponsive to bug reports and feature requests.  The bigger your project, the more important dedicated support is. 


# Solution round-up
We've attempted to categorize each library/framework to indicate their optimal use case.

{:.solution-category}
## Sync libraries 
These libraries tend to focus entirely on the data synchronization piece of realtime collaboration.  They are small and do the data sync well, but you are on your own for additional concerns like authentication, access control, and [collaborative UX support](/blog/2017/02/building-realtime-collaborative-applications).  They are best suited for experiments such as proof-of-concepts (PoCs) as opposed to production-grade apps.


### [Automerge](https://github.com/automerge/automerge)

Automerge provides automatic syncing and merging for a small set of data types.  Object, arrays, and strings are all supported.  Doesn't dictate the transport layer.  Uses CRDTs under the hood.

#### Pros

- Peer-to-peer, decentralized support with the MPL (Magic Persistence Layer) library
- Change history
- Offline support
- Support for relational tables

#### Cons

- No rich text support
- No authentication or authorization support

| License | Popularity | Status
| --- | --- | ---
| MIT | 7,700 stars | Active


### [Yjs](http://y-js.org/)

Yjs is a framework for shared editing.  It is structured to allow customization of storage and transports.   It uses CRDTs behind the scenes and supports a fixed set of types out of the box.

#### Pros

- Support for decentralized, peer-to-peer shared data editing
- Fairly rich set of supported types: Maps/arrays, text, and rich text ([Quill](http://quilljs.com/) only)
- Out of the box support for a variety of common UI libraries (Ace, Quill, CodeMirror, etc)
- Offline support

#### Cons

- Relatively untested[^1] in production settings
- No authentication or authorization support

| License | Popularity | Status
| --- | --- | ---
| MIT | 1,200 stars | Active


{:.solution-category}
## Full-backend solutions

These frameworks provide the majority of what most applications would need out of the box.  Convergence is the most full-featured, while ShareDB has been around for a long time and has thus been fairly hardened.

### [ShareDB (formerly ShareJS)](https://github.com/share/sharedb)

ShareDB is an open-source realtime backend. It uses OT to synchronize data.  [This repository](https://github.com/ottypes) contains the types supported by ShareDB: JSON, plain text, and rich-text (scoped to work with Quill).

ShareDB is likely the most widely-used open-source RTC solution.  It is architected in such a way to accommodate customizations, and is currently in use in several production systems.  

#### Pros

- Used in several production systems
- Extensible via middleware with community-provided modules for authorization, etc.
- Flexible storage options
- Offline support

#### Cons

- Supporting other data types requires writing transforms from scratch, which is extremely time-intensive and error-prone
- Very limited support for [collaborative cues](https://convergencelabs.com/blog/2017/02/building-realtime-collaborative-applications)

| License | Popularity | Status
| --- | --- | ---
| MIT | 2,900 stars | Active


### [SwellRT](http://swellrt.org/)

SwellRT is an open source backend-as-a-service designed to ease building realtime collaborative applications.  It is a fork of the now-defunct [Apache Wave](http://incubator.apache.org/wave/) project, which was originally open-sourced when Google Wave shut down.

SwellRT is OT-based, and thus requires a master node to preserve a global order of operations.  [It claims to be decentralized](https://github.com/P2Pvalue/swellrt/wiki/Comparing-SwellRT-with-Etherpad#scalability) but it has yet to be proven.

SwellRT is also the technology powering Jetpad, a realtime collaborative rich text editor.  Unfortunately the UI appears to be tightly tied to the backend implementation.

#### Pros

- Built-in user management and authentication
- Included storage with MongoDB

#### Cons

- Relatively untested in production
- Abandoned? Over a year without updates


| License | Popularity | Status
| --- | --- | ---
| Apache 2.0 | 185 stars | Last updated Dec 2018


### [Convergence](https://convergence.io)

We of course couldn't write this article without mentioning our own product! Convergence is the only all-in-one solution for adding complete realtime collaboration functionality to web applications.  After designing and implementing many realtime collaborative applications, we built Convergence to support the functionality that _every_ RTC app needs.  In late 2019 Convergence became [free and open-source](https://convergencelabs.com/blog/2019/11/convergence-is-now-open-source/) software.

#### Collaborative Cues
Where every library in this list only addresses the data synchronization problem, Convergence goes beyond, providing APIs for building collaboration awareness, presence, and chat.  Any usable multi-user application will need some sort of collaborative cueing to help users avoid conflicts, and Convergence provides APIs for references and activities.

#### Pros and Cons

Convergence is a full-fledged backend, so you get real-time data sync, collaboration cues, change history, user management, and authentication/authorization all in one place.  This makes Convergence relatively monolithic, which can be undesirable for some application infrastructures. 

| License | Popularity | Status |
| --- | --- | --- |
| LGPL (client), GPL (server) | 15 stars | Active |


{:.solution-category}
## Specialty solutions

These are categorized separately as they take a unique approach to the problem.  The first does DOM-level synchronization, while Flip was designed for complex use cases.

### [Webstrates](https://webstrates.github.io)
WWebstrates does DOM-level synchronization.  It also includes a general purpose messaging framework between connected clients.  The actual data synchronization is performed behind the scenes by ShareDB.

DOM syncing is a fairly straightforward approach towards providing a feel of realtime collaboration.  However, web developers have for a long time been aware of the drawbacks of basing their applications on the DOM rather than a domain-specific javascript model. 

| License | Popularity | Status |
| --- | --- | --- |
| Apache 2.0 | 122 stars | Active |


### [Flip](https://irisate.com/)

The Flip framework was extracted from Ohm Studio, a richly featured digital audio workstation with realtime collaboration at its core.  It is attacking the problem from a depth-first perspective, with heavy use of system invariants and a focus on guaranteed resolution for complex data types.

There curently isn't a lot of public information about the framework.

| License | Status |
| --- | --- |
| Proprietary | ? |


{:.solution-category}
## Related software

So far we've focused on *general-purpose* RTC solutions that can be both be easily plugged into an existing codebase and support a relatively wide variety of data. However, there are a few related projects out there that may fit some people's needs:

### Integrated RTC web components

There are a number of UI components out there that provide both the view layer and an integrated data synchronization backend.  If you have a very specific use case (say, you just need a RTC rich text editor to drop into your app) one of these may fit the bill:

- [CKEditor 5](https://ckeditor.com/ckeditor-5-framework/) is an open source rich text editor that supports RTC out of the box.  
- [Firepad](https://firepad.io/) is an open source code and text editor that combines a RTC adaptor with Firebase for data storage and synchronization.  Requires a Firebase account.

### End-user applications
- [Etherpad](http://etherpad.org/) is an end-user application (Mac and Windows) that is essentially a RTC document editor.  
- [Codox Wave](http://wave.codox.io/) takes an interesting approach to end-user collaboration.  It provides a browser extension to enhance some of the most popular web-based software such as WordPress, Gmail, Evernote, and Zendesk with RTC functionality.


{:.solution-category}
## Dead/retired projects

These projects had their time in the sun but have since been abandoned or cancelled.  

- [OT.js](https://github.com/Operational-Transformation/ot.js)
- [Apache Wave](http://incubator.apache.org/projects/wave.html)
- [Google Realtime API](https://developers.google.com/google-apps/realtime/overview)
- [TogetherJS](https://github.com/mozilla/togetherjs/issues/1127)


### Footnotes

[^1]: [Get in touch](mailto:contact@convergencelabs.com) if you've built something significant and we'll update this!

