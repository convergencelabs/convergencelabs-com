---
layout: post
title: "New Features: Offline Support and Connection Smoothing"
description: "We go into some detail one our new offline support. Why did we build them?  What did we aim to support?  How did we go about it? Where are we going next?"
date: 2020-01-10 10:21:01 -0700
categories: [convergence]
featured_image: /assets/images/blog/plug.png
author: 
- alec
- michael
crosspost_to_medium: false
---
Convergence is first and foremost an engine for live real-time collaboration (RTC).  It was designed from the ground up to utilize a central server to coordinate changes between any connected clients over any number of collaboration contexts.

But what happens when a client temporarily loses connectivity?  Originally, the Convergence client would detect the connectivity disruption, emit a `INTERRUPTED` event, and simply throw exceptions when most client API calls where made.  There was no concept of "offline functionality".  Consuming applications were forced to immediately halt editing and display some sort of "Connection Lost" modal, which isn't the best user experience.
 
Many users request the ability to continue to work during temporary disconnections where model changes, presence updates, activity updates, etc. can still be made locally and then synced to the server when connection is regained. However, this requires that the application remain open. We have several customer request the ability to work during more long term periods of disconnection where the application does not need to remain open, requiring persistent offline storage of data.
 
Convergence `1.0.0-rc.4` introduces experimental offline support the aims to meet these requirements!  Let's dive into what exactly we mean by "offline" support.

# Aims

There are a number of different potential usage scenarios under the "offline" umbrella.  As part of this development effort, we aimed to support the most useful ones. One particularly important use case is where a user starts up their app offline, makes changes, and eventually reconnects to send all their changes to the server.  This requires the local persistence of any changes, ability to bootstrap the system with no connectivity, and the eventual synchronization of any remote changes with any previous local changes.  

## Developer Ergonomics

The overall aim is to require as little forethought from the developer as necessary around reconnection and offline scenarios.  For instance, we have implemented a type of "connection smoothing" where each client subsystem (e.g. Activities, Presence, Real Time Models) detects temporary disconnections and attempts to periodically reconnect.  This behavior happens automatically and by default, yet is still configurable.  We have made every attempt to support features that don't necessarily require a server connection; for example, you can still set your local [activity](https://docs.convergence.io/guide/activities/overview.html) state, it just won't be communicated to other participants until a server connection is restored.  You can even still [join](https://docs.convergence.io/js-api/classes/activityservice.html#join) an activity while offline; of course, no associated events or state changes will be relayed until you become connected again. 

# Supported Features

Here are the features we support in `1.0.0-rc.4`:

## General
- Support for applications running in evergreen browsers, the most popular embedded browser environments (Electron, NwJS), and Node.js.
- Pluggable offline storage.  We have provided a default implementation which uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), which enjoys [fairly widespread browser support](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and implementations for Electron, NwJS, and Node.js. See the [IStorageAdapter](https://docs.convergence.io/js-api/interfaces/offline.istorageadapter.html) for the API.

## Connection and Authentication
- Automatically attempts to reconnect periodically when a disconnection occurs, using a reconnect token to avoid needing to reauthenticate.
- Ability to provide a [fallback authentication callback](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect) to asynchronously re-authenticate in case the reconnect token is rejected (e.g. it expired).
- Configuration of the reconnection behavior.

## Real Time Data
- All local changes to models are always stored locally until acknowledged by the server.
- Create new models offline and store them until reconnected.
- While connected, proactively download any number of models, and keep them updated on any remote changes.  See [ModelService.subscribeOffline](https://docs.convergence.io/js-api/classes/real_time_data.modelservice.html#subscribeoffline)
- Open available models offline and make additional changes.
- When a ConvergenceDomain detects connectivity again and offline changes to models are detected, it automatically syncs those models with the server.  This includes models that are not currently open.
- Delete models offline, and they will be deleted when reconnection occurs.

## Activities
- Activity state is maintained while offline, and users can continue to change their activity state.
- Activities can be joined offline.
- When Convergence reconnects, all previously joined activities are rejoined and the latest activity state is published for each activity

## Chat
- All previously joined chat rooms are rejoined upon reconnection.

## Presence
- Presence state is maintained while offline, and users can continue to change their presence state.
- When Convergence reconnects, all previously the latest presence state is published.
- Any presence subscriptions are re-established.

# Limitations and Unsupported features
The following features are not yet supported in `1.0.0-rc.4`, but coming soon:

- Offline editing in multiple tabs in the same browser.  There are numerous complications to support this, mainly around those editing sessions being persisting to the the same local database.
- Encryption of local data.
- Model id's can be user defined, thus when offline changes to models and deletion of models is based on id.  If other connected users delete a model with a particular id, and then recreate it, Convergence can't tell that it is a new model.

# Usage

Clearly, there is a ton going on behind the scenes here to support these various connectivity scenarios. Yet we have minimized the effort necessary to actually use these features.  For detailed usage information, see our [developer Guide](https://docs.convergence.io/guide/offline/overview.html).  Automatic reconnect comes for free and is enabled by default.  Some aspects of the reconnect functionality are configurable; see the [documentation](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect)

We hope you enjoy this new functionality as much as we enjoyed building it!

TODO 

Add backlink from rc.4 post when ready to publish