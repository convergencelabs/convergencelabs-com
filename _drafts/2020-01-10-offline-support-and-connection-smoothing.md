---
layout: post
title: "New Features: Offline Support and Connection Smoothing"
description: "Here, we go into some detail on our latest new features. Why did we build them?  What did we aim to support?  How did we go about it?"
date: 2020-01-10 10:21:01 -0700
categories: [convergence]
featured_image: /assets/images/blog/plug.png
author: 
- alec
- michael
crosspost_to_medium: false
---
Convergence is first and foremost an engine for live real-time collaboration (RTC).  It was designed from the ground up to utilize a central server to coordinate changes between any connected clients over any number of collaboration contexts.

But what happens when a client temporarily loses connectivity?  Originally, the Convergence client would detect the connectivity disruption, emit a `DISCONNECTED` event, and simply throw exceptions whenever local changes were attempted.  There was no concept of "offline changes" or any offline support whatsoever.  Consuming applications were forced to immediately halt editing and display some sort of "Connection Lost" modal, which isn't the best user experience.  

We've had a few customers request offline support, where application users could pre-emptively download their data to prepare for a connectivity loss, such that they could still work while disconnected.  Then, while disconnected, they could make local edits, and on reconnect those edits would be synchronized with the server.  Well, as of 1.0.0-rc.4 that is possible with Convergence!  Let's dive into what exactly we mean by "offline" support:

# Aims

There are a number of different potential usage scenarios under the "offline" umbrella.  As part of this development effort, we aimed to support the most useful ones. One particularly important use case is where a user starts up their app offline, makes changes, and eventually reconnects to send all their changes to the server.  This requires the local persistence of any changes, ability to bootstrap the system with no connectivity, and the eventual synchronization of any remote changes with any previous local changes.  

## Developer Ergonomics

The overall aim is to require as little forethought from the developer as necessary around reconnection and offline scenarios.  For instance, we have implemented a type of "connection smoothing" where each client subsystem (e.g. Activities, Chat, Real Time Models) detects temporary disconnections and attempts to periodically reconnect.  This behavior happens automatically and by default, yet is still configurable.  We have made every attempt to support features that don't necessarily require a server connection; for example, you can still set your local [activity](https://docs.convergence.io/guide/activities/overview.html) state, it just won't be communicated to other participants until a server connection is restored.  You can even still [join](https://docs.convergence.io/js-api/classes/activityservice.html#join) an activity while offline; of course, no associated events or state changes will be relayed until you become connected again. 

## Features

Here are the features we support in rc.4:

- Support for applications running in evergreen browsers, the most popular embedded browser environments (Electron, NwJS), and Node.js.
- Automatically attempts to reconnect periodically when a disconnection occurs
- Configuration of the reconnection periods
- Ability to provide a [callback](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect) to asynchronously re-authenticate
- On disconnection detection, automatically store local model changes in-memory, and automatically sync these local changes with any remote updates on reconnect
- Automatic reconnection for subscribed / opened activities and chats
- Offline preparation: While connected, programmatically download any number of models, and keep them updated on any remote changes.  See [ModelService.subscribeOffline](https://docs.convergence.io/js-api/classes/real_time_data.modelservice.html#subscribeoffline).
- When a ConvergenceDomain detects connectivity again and offline changes to models are detected, it automatically syncs those models with the server.  This includes models that are not currently open.
- Pluggable offline storage.  We have provided a default implementation which uses [`IndexedDB`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), which enjoys [fairly widespread browser support](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and implementations for Electron, NwJS, and Node.js. See the [IStorageAdapter](https://docs.convergence.io/js-api/interfaces/offline.istorageadapter.html) for the API.

The following features are not yet supported, but coming soon:

- Offline editing in multiple tabs in the same browser.  There are numerous complications to support this, mainly around those editing sessions being persisting to the the same local database.
- Encryption of local data

# Technical Overview

Connection smoothing and offline support may not at first appear to be related, but upon closer inspection it becomes clear that the latter is dependent on the former.  Put simply, offline support is the same as auto-reconnect, except that the changes are persisted within and across application sessions.  In both scenarios, the same algorithm is required to sync the "offline" changes with any remote changes that may have happened while disconnected.

This reconnection process required the invention of the Hub-Ordered Operational Transformation algorithm, which is described in its entirety [here](<link-to-hoot-algo-ppt>).

[riff on whatever is most impressive here]

# Usage

Clearly, there is a ton going on behind the scenes here to support these various connectivity scenarios. Yet we have minimized the effort necessary to actually use these features.  For detailed usage information, see our [developer Guide](https://docs.convergence.io/guide/offline/overview.html).  Automatic reconnect comes for free and is enabled by default.  Some aspects of the reconnect functionality are configurable; see the [documentation](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect)

We hope you enjoy this new functionality as much as we enjoyed building it!

TODO 

Add backlink from rc.4 post when ready to publish