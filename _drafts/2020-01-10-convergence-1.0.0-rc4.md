---
layout: post
title: "Convergence 1.0.0 Release Candidate 4"
description: "We just released Convergence 1.0.0-rc.4, which includes eight months (!) of updates across all aspects of the product."
date: 2020-01-09 16:51:01 -0700
categories: [convergence]
featured_image: /assets/images/blog/clark-tibbs-oqStl2L5oxI-unsplash.jpg
author: alec
crosspost_to_medium: true
---
If you haven't noticed, there have been a lot of major changes around here. Topping the list, of course, is our [open-source repositioning](/blog/2019/11/convergence-is-now-open-source/) last month.  Convergence has been the most powerful real-time collaboration (RTC) framework for several years, and now you can see for yourself!  We originally envisioned making the open-source announcement alongside this major `1.0.0-rc.4` release, but just couldn't wait! So without further ado, we present *Convergence 1.0.0 Release Candidate 4*, featuring:

# Automatic Reconnect and Connection Smoothing

Convergence now intelligently detects and smooths over connectivity interruptions.  So, for example, if you're co-editing a diagram with a colleague on a mobile device, and your connection drops temporarily, Convergence will automatically queue up any subsequent edits in memory.  On reconnection, there is an automatic reconciliation process where any remote updates are pulled down, merged with your local changes, and sent back up to the server.  No longer do consuming applications have to write their own connectivity-detecting boilerplate code.

# Experimental Offline Support

Convergence now supports [offline editing](https://docs.convergence.io/guide/offline/overview.html).  You can think of this as a logical extension to the automatic reconnect functionality, where instead of keeping local changes in memory, we persist them.  This enables complete support for offline sessions, including [initializing domains while offline](https://docs.convergence.io/js-api/classes/convergencedomain.html#initializeoffline), [downloading model data](https://docs.convergence.io/js-api/classes/real_time_data.modelservice.html#subscribeoffline) in preparation for a connectivity disruption, and automatic change synchronization on connectivity restoration. 

We are calling this functionality experimental in order to keep the door open for [potential breaking API changes](https://docs.convergence.io/guide/offline/overview.html#Limitations) as well as acknowledging the need for more robust testing.  

One unintuitive limitation of this early offline release regards the most common "kicking the tires" scenario: Initializing offline domains in two adjacent browser tabs.  In this case, the same IndexedDB database will be shared between tabs, causing unexpected behavior.  Using two different browsers entirely works as intended. We will be refining this use case in the coming months.

# API Keys, Documentation, Bug fixes and more

We also added [User API Key support](https://github.com/convergencelabs/convergence-project/issues/8) to the Convergence [Server](https://github.com/convergencelabs/convergence-server) and [Administration Console](https://github.com/convergencelabs/convergence-admin-console). Simply navigate to `/account-settings` when logged into the admin console, where you can add, remove, and enable/disable API keys. These keys can be included in the `Authorization` header when [making REST requests](https://docs.convergence.io/guide/rest-api/authentication.html).

For this release, we spent a lot of effort fleshing out and organizing our [API Documentation](https://docs.convergence.io/js-api/index.html) to make it easier to use. A large part of this effort was building an open-source [Typedoc plugin](https://github.com/convergencelabs/typedoc-plugin-custom-modules) allowing us to more flexibly organize our (rather large!) Typescript codebase.

Of course, `1.0.0-rc.4` includes ~~dozens~~ hundreds of bug fixes across all aspects of the product, some of which are enumerated [here](https://github.com/convergencelabs/convergence-project/milestone/2?closed=1).

# What's next?

We are quite excited to start operating in a more transparent manner.  To that end, starting with this release we are publishing:

- per-release [CHANGELOG](https://github.com/convergencelabs/convergence-project/wiki/CHANGELOG)s
- a [road map](https://github.com/convergencelabs/convergence-project/wiki/Convergence-Road-Map)

To save you from clicking that last link, in the short-term we are focused on improving the developer tooling and infrastructure such that new adopters can easily [get started](https://convergence.io/quickstart/).

Feature-wise, we are already building experimental Rich Text support into the product! Look for this in the next few months.

To keep up to date with what we're working on, simply [watch](https://github.com/convergencelabs/convergence-project) our GitHub tracking project, or [sign up](https://www.getdrip.com/forms/62786386/submissions) for our (sparsely-utilized) newsletter.

We are really looking forward to seeing what you'll build!