---
layout: post
title: Introducing Convergence Release Candidate 1
description: "RC.1 represents our initial On-premise-first release of Convergence, the Realtime Collaboration Engine."
date: 2019-03-18 21:21:21 -0700
categories: [convergence]
featured_image: /assets/images/blog/rc1.png
author: Alec LaLonde
crosspost_to_medium: true
---
This is the biggest release we've ever done.

By far.  Tens of thousands of lines of code.  On-premise-first.

We're ridiculously excited to announce the first release candidate for the Convergence Real-time Collaboration Engine!  Let's just jump right into the goods:

1. We completely replaced the underlying messaging protocol and serialization logic.  This translates to dramatically smaller messages and far less bandwidth usage, which means the fastest collaboration engine on the planet is even faster.
1. We rewrote the Administration Console from scratch.  The old one was getting long in the tooth, rather buggy, and increasingly difficult to maintain.  We focused the greatest efforts on the sections that see the most use: the model query page and model editor. 
1. We expanded the REST API.  Anything you can do in the Admin Console you can now do programmatically.
1. Dozens of bug fixes.
1. Semantic versioning and a predictable release process.  No longer do you have to worry about method calls failing just because you pulled the latest beta version accidentally.

This all goes hand-in-hand with our new On-premise-first deployment strategy.  No longer do you have to get "approved" by some mystical authority to try out Convergence. Just download the new [Convergence Development Edition](https://hub.docker.com/r/convergencelabs/convergence-de) and you're off to the races instantly!

This is a huge milestone for us, but it's just the beginning of a major product push.  We have some major features up our sleeve and can't wait to get them in your hands.  After all, this is all for naught if _you_ aren't building the software of the future.  

We'll see you on the inside.