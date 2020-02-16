---
layout: post
title: Collaborative Extensions for the Monaco Code Editor
description: "Collaborative code editing is rising in popularity, so we created a library that makes adding real-time collaboration functionality to Monaco much easier."
date: 2019-10-22 09:21:01 -0700
categories: [convergence, community]
featured_image: /assets/images/blog/monaco-demo.gif
author: alec
crosspost_to_medium: true
---
Around mid-2017, some of the [major](https://teletype.atom.io/) [open-source](https://code.visualstudio.com/blogs/2017/11/15/live-share) code editors starting adding real-time collaboration (RTC) functionality.  This allowed developers to create "live" sessions in which they could share their current workspace with trusted collaborators.  The plugins have been used for all sorts of different cases, from performing coding interviews to paired programming to collaborative debugging.  This sort of collaboration modality has the potential to be even better than paired programming on a single terminal: each developer can control her own input devices and viewport while still being aware of what the other developer(s) are working on.  They can work independently while still able to communicate (over a separate voice or video channel) about shared code constructs.

There are [plenty](https://www.verypossible.com/blog/pros-and-cons-of-pair-programming) of [opinions](https://blog.inf.ed.ac.uk/sapm/2014/03/07/real-time-collaborative-programming-in-software-business/) about the efficacy of collaborative coding, but the market is clearly moving towards at least supporting it.  Code is just text, after all, which makes it a fairly straightforward data type to keep in sync between many participants.   Like most RTC applications, though, it's the [UX](/blog/2017/09/what-makes-for-a-great-collaborative-editing-experience/) that differentiates them.  From day one, we've focused our efforts on building a collaboration engine that easily supports an optimal collaborative editing experience, because a frustrated user means a lost user.

# Visual Studio Code and the Live Share Extension

Visual Studio Code is [currently](https://insights.stackoverflow.com/survey/2019#development-environments-and-tools) the dominant tool for development. It provides a nice blend of IDE-like functionality and speed (I'm typing this post in VS Code, in fact).  Early on, the VS Code team decided to build and maintain the editor component separately from the greated VS Code codebase, branding it "Monaco".  VS Code's implementation of RTC is called ["Live Share"](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) and is packaged as a collection of extensions.  Live Share, however, can't be used (along with any other VS Code extension) with the underlying Monaco editor, so what is a Monaco user to do?

# Filling the Gap

That's where the [Collaborative Extensions for Monaco](https://github.com/convergencelabs/monaco-collab-ext) come in.  It was too difficult to implement data sync, shared cursors, and shared selections. To address these deficiencies, the extension consists of these components:

- The `EditorContentManager` simplifies dealing with local and remote changes to the editor.  Simplify call e.g. `manager.insert(index, 'text')` to insert text, and provide an `onInsert(index, text)` callback to listen for insertions to the underlying data model.   
- The `RemoteCursorManager` provides a simple utility for rendering the cursors of any other user.
- The `RemoteSelectionManager` is a similar utility for rendering another user's selections within the current document.

These extensions were built in an agnostic manner, and have _no dependencies on Convergence or any other data-sync library_.  

To see the [extensions](https://github.com/convergencelabs/monaco-collab-ext) in action, check out our [example app](https://examples.convergence.io/examples/monaco/) that utilizes Monaco and the [Convergence Collaboration Engine](https://convergence.io) to provide a nice collaborative editing experience.  