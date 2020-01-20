---
layout: post
title: "New Features: Offline Support and Connection Smoothing"
description: "Here we go into more detail about our new offline and reconnection features. Why did we build them?  What sort of use cases did we aim to support?  And what's next?"
date: 2020-01-13 11:35:01 -0700
categories: [convergence]
featured_image: /assets/images/blog/plug.png
author: 
- alec
- michael
crosspost_to_medium: true
---
Convergence is first and foremost an engine for live real-time collaboration (RTC).  It was designed from the ground up to utilize a central server to coordinate changes between any connected clients over any number of collaboration contexts.

But what happens when a client temporarily loses connectivity?  Originally, the Convergence client would detect the connectivity disruption, emit an `INTERRUPTED` event, and simply throw exceptions when most client API calls where made.  There was no concept of "offline functionality".  Consuming applications were forced to immediately halt editing and display some sort of "Connection Lost" modal, which isn't the best user experience.
 
We've had a few users request the ability to continue to work during temporary disconnections. Where model changes, presence updates, activity updates, etc. can still be made locally and then synced to the server when connectivity is regained. However, this requires that the application remain open. Furthermore, we've had several customers request the ability to work during more long-term periods of disconnection where the application does not need to remain open, requiring persistent offline storage of data.
 
In Convergence `1.0.0-rc.4` we've introduced experimental offline to meet these requirements!  Let's dive into what exactly what we mean by "offline" support.

# Aims

There are a number of different potential usage scenarios under the "offline" umbrella.  As part of this development effort, we aimed to support the most useful ones. One particularly important use case is where a user starts up their app offline, makes changes, and eventually reconnects to send all their changes to the server.  This requires the local persistence of any changes, ability to bootstrap the system with no connectivity, and the eventual synchronization of any remote changes with any previous local changes.  

## Developer Ergonomics

The overall aim is to require as little forethought from the developer as necessary around reconnection and offline scenarios.  For instance, we have implemented a type of "connection smoothing" where each client subsystem (e.g. Activities, Presence, Real Time Models) detects temporary disconnections and attempts to periodically reconnect.  This behavior happens automatically and by default, yet is still configurable.  We have made every attempt to support features that don't necessarily require a server connection; for example, you can still set your local [activity](https://docs.convergence.io/guide/activities/overview.html) state, it just won't be communicated to other participants until a server connection is restored.  You can even still [join](https://docs.convergence.io/js-api/classes/activityservice.html#join) an activity while offline; of course, no associated events or state changes will be relayed until you become connected again. 

# Supported Features

Here are the features we support in Release Candidate 4:

## General
- Support for applications running in evergreen browsers, the most popular embedded browser environments (Electron, NwJS), and Node.js.
- Pluggable offline storage.  We have provided a default implementation which uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), which enjoys [fairly widespread browser support](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and implementations for Electron, NwJS, and Node.js. See the [IStorageAdapter](https://docs.convergence.io/js-api/interfaces/offline.istorageadapter.html) for the API.

## Connection and Authentication
- Automatically attempts to reconnect periodically when a disconnection occurs, using a reconnect token to avoid needing to reauthenticate.
- Ability to provide a [fallback authentication callback](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect) to asynchronously re-authenticate in case the reconnect token is rejected (e.g. it expired).
- Configuration of the reconnection behavior.

## Real Time Data
- When offline support is enabled, all local changes to models are always stored locally until acknowledged by the server.
- Create new models offline and store them until reconnected.
- While connected, proactively download any number of models, and keep them updated on any remote changes.  See [ModelService.subscribeOffline](https://docs.convergence.io/js-api/classes/real_time_data.modelservice.html#subscribeoffline)
- Open available models offline and make additional changes.
- When a `ConvergenceDomain` detects connectivity again and offline changes to models are detected, it automatically syncs those models with the server.  This includes models that are not currently open.
- Delete models offline, which are deleted on the server upon reconnect.

## Activities
- Activity [state](https://docs.convergence.io/guide/activities/state.html) is maintained while offline. Users can continue to change their own state.
- Activities can be joined offline.
- When Convergence reconnects, all previously joined activities are rejoined and the latest activity state is published for each activity.

## Chat
- All previously joined chat rooms are rejoined upon reconnection.

## Presence
- [Presence](https://docs.convergence.io/guide/presence/overview.html) state is maintained while offline. Users can continue to change their own state.
- Upon reconnect, the user's current presence state is published.
- Any existing presence [subscriptions](https://docs.convergence.io/js-api/classes/presence.userpresencesubscription.html) are re-established on reconnect.

# Limitations
The following features are not yet supported in `1.0.0-rc.4`, but coming soon:

- Offline editing in multiple tabs in the same browser.  There are numerous complications to support this, mainly around those editing sessions persisting to the same local database.
- Encryption of local data.
- Model IDs can be user defined. When offline, changes to models and deletion of models are keyed by id.  So if another connected user deletes a model with a particular id, and then recreates it, Convergence can't currently tell that it is a new (different) model.

# Usage

Clearly, there is a ton going on behind the scenes here to support these various connectivity scenarios. Yet we have minimized the effort necessary to actually use these features.  For detailed usage information, see our [Developer Guide](https://docs.convergence.io/guide/offline/overview.html).  Automatic reconnect comes for free and is enabled by default.  Some aspects of the reconnect functionality are configurable; see the [documentation](https://docs.convergence.io/js-api/interfaces/connection_and_authentication.iconvergenceoptions.html#reconnect).

We hope you enjoy this new functionality as much as we enjoyed building it!
