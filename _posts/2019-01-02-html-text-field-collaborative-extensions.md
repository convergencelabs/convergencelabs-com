---
layout: post
title: HTML text field collaborative extensions
description: "It was way too hard to render collaborative UI elements on top of plain old HTML input and textarea elements. Not anymore!"
date: 2019-01-02 21:41:21 -0600
categories: [convergence, community]
featured_image: /assets/images/blog/html-extension-screenshot.png
author: Alec LaLonde
crosspost_to_medium: true
---

See a demo here (use two browser windows): <https://examples.convergence.io/collaborative-textarea/>

See the source and usage instructions here: <https://github.com/convergencelabs/html-text-collab-ext>

Or install with `npm install @convergence/html-text-collab-ext`

### Why?

Any time you're building web-based software with multiple simultaneous users in mind, it's essential to provide _collaborative cues_ to let each participant know who's currently doing what.  To achieve this in a textual environment, remote selections and cursors are the most intuitive UX constructs.

![demo gif](https://raw.githubusercontent.com/convergencelabs/html-text-collab-ext/master/assets/shared-cursors-and-selections.gif){:class="img-responsive"}

It is comically difficult to do this sort of thing in a plain HTML `textarea` or `input` field, so we spared you the (sick) joke of implementing it yourself!

### Background
We've had to implement several one-off solutions for collaborative text editors over the past few months, so the natural thing to do was extract the common functionality into a developer-friendly consumable module.  After several full days wrestling with things like [properly calculating the positions](https://github.com/convergencelabs/html-text-collab-ext/blob/master/src/ts/SelectionComputer.ts) for overlays and handling element and window-level resizing, we didn't want anybody to have to do it again!

To be clear, this was designed to be used with the data synchronization algorithm / library of your choice -- we'd love to see examples of it in use with something other than Convergence!

Enjoy the library.  We can't wait to see how you use it!
