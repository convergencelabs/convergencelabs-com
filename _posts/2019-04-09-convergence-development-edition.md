---
layout: post
title: Convergence Development Edition, and why we're moving away from SaaS
description: "Introducing convergence-de, a self-serve all-in-one container to get started building with Convergence"
date: 2019-04-09 10:21:01 -0700
categories: [convergence]
featured_image: /assets/images/blog/convergence-de.png
author: Alec LaLonde
crosspost_to_medium: false
---
Two and a half years ago, we [opened up Convergence](https://convergencelabs.com/blog/2016/11/alpha-product-launched/) to alpha testers.  It was originally provided as a hosted Collaboration Engine; we would maintain the infrastructure and you could just write code to point to it. 

We never actually ended up allowing complete self-serve access, for a number of reasons.  Supporting a production-capable cloud-based API and data store is _demanding_, to say the least.  We spent way too much of our time just keeping it running, and struggled with more downtime than we liked.  Monitoring, API limiting, scaling, security, backups, data and schema migrations, and on and on: There's a _lot_ of infrastructure to think about and maintain.  As a small team, there was no time left to fix bugs and ship features on the actual product.

So we're taking a step back from the SaaS model.  Increasingly greater numbers of our new users are inquiring about an on-premise solution.  They're already hosting one or more applications on their own servers.  They're knowledgeable about automating backups and monitoring web services.  Plugging in a few more Docker images isn't a big deal.

Thus, we've stopped offering a hosted environment for production usage.  Instead, we're providing [Docker images of the Convergence Server](https://hub.docker.com/r/convergencelabs/convergence-de) for you to install in your own environment.  No longer do you have to appease the gatekeeper (yours truly) just to play around with Convergence.  Just `docker pull` and you're off to the races!  Once you've built that killer real-time collaboration feature into your app, [get in touch](https://convergence.io/contact-sales/) and we'll work out a deal for an official production-ready instance of Convergence.

Obviously, this has ramifications for our pricing.   In short, we'll be adopting an annual license + support model.  This allows us to execute a higher-touch sales process so we can get to know each customer and customize a license to meet their unique requirements.  And as a small company ourselves, we are acutely aware of the challenges facing early-stage startups, so we offer special startup pricing to early-stage companies.

Our mission is to build a world where real-time collaboration is at the core of every piece of networked software.  Individuals, companies, developers; we all stand to benefit.  

We'd love to hear your thoughts on this change.  Please reach out to us at [contact@convergencelabs.com](mailto:contact@convergencelabs.com).