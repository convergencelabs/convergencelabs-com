---
layout: post
title:  "Introducing Collaborative Extensions for the Ace Editor"
date:   2018-02-06 12:09:21 -0700
categories: [convergence, community]
featured_image: /assets/images/blog/ace-collab.jpg
author: Alec LaLonde
excerpt_separator: <!--excerpt-->
---
Build a multi-user code editor in minutes, with Ace and Convergence Labs' Ace Collaborative Extensions. 
<!--excerpt-->
The [Ace Code Editor](https://ace.c9.io/) has been the web's premiere code editor for some time now, with a huge community behind it and far-reaching usage across the web. It helps millions of developers at [GitHub](https://github.com/blog/905-edit-like-an-ace) and [Cloud9](https://aws.amazon.com/cloud9) navigate and edit code in a very user-friendly fashion.  

But like most web components, it wasn't designed with simultaneous multiple users in mind.  Yet [more](https://code.visualstudio.com/visual-studio-live-share) and [more](http://blog.atom.io/2017/11/15/code-together-in-real-time-with-teletype-for-atom.html) editors are embracing real-time multi-user capabilities.  A code editor is just plain text (without markup), and plain text as a data model is quite easy to deal with, so it's quite low-hanging fruit to make it collaborative.  One could easily use something like the open-source [ShareDB](https://github.com/share/sharedb) to handle the data synchronization, but that's only one piece of the puzzle.  Without collaborative cues such as colored remote cursors and selections, how do you know what other people are intending to work on so you're not trampling on your fellow collaborators?

Enter the [Ace Collaborative Extensions](https://github.com/convergencelabs/ace-collab-ext).  Here at Convergence Labs, we love Ace. It's a fantastic demonstration of a useful piece of collaborative software.  So we put together a set of utilities for managing multiple cursors (from multiple users) and selections with an intuitive API.  We even tacked on a _Radar View_, which adds the concept of remote scrollbars, so you can see _where_ in the document a remote user is, even if it extends beyond the viewport height.  If you look at the image accompanying this post, you can see examples of all three: A red remote selection at the top, a green remote cursor on line 37, and remote scrollbars for both the "red" and "green" users.  Obviously, it's up to you to assign a color to each remote user!

It's these little UI additions that can transform a frustrating multi-user app into a truly [collaborative](/blog/2017/02/redefining-realtime-collaboration/) one.

See a demo [here](https://examples.convergence.io/ace/).  Note that __this library does not have a dependency on Convergence__!  You can use it with whichever data synchronization library you'd like.  Of course, Convergence is a great fit, as you can see in the [source code here](https://github.com/convergencelabs/javascript-examples/tree/master/src/ace).

- Source: <https://github.com/convergencelabs/ace-collab-ext>
- Demo: <https://examples.convergence.io/ace/>
- Demo source: <https://github.com/convergencelabs/javascript-examples/tree/master/src/ace>
