---
layout: post
title: "Convergence Is Now Open Source"
description: "We are delighted to now offer the Convergence Collaboration Engine as free and open source software. Here we discuss our journey and what this change means going forward."
date: 2019-11-15 11:51:01 -0700
categories: [convergence, community, open source]
featured_image: /assets/images/blog/open-source.png
author: alec
crosspost_to_medium: true
---
We are incredibly excited to offer Convergence as free and [open source software](https://github.com/convergencelabs).  Our mission from day one has been to usher in a new era of collaboration-first software, where people have access to amazing tools to create things together regardless of physical location.  Today marks a huge step in that direction.

Convergence is far and away the most powerful piece of software for building real-time collaborative (RTC) applications.  We've of course been saying that for years, but now you can go and [see for yourself](https://github.com/convergencelabs)!  Over the last decade we've been building RTC applications for people all over the world, and along the way we've learned a lot about a typical product's UX and technical requirements.  From this expertise we designed and built Convergence, which is the 4th generation (and first publicly-available version) of our real-time collaboration engine.  It provides all the components you need to build your own RTC app very quickly.

# Our journey and the state of real-time collaborative software

From day one, in the back of our minds we all sensed that open-source was the best approach.  At the product's inception, we decided to focus on lowering the barriers to entry to get started with Convergence.  SaaS had been the dominant mode of software distribution for a while, so we offered the infrastructure online such that would-be adopters wouldn't have to run any servers to try out the platform.  However, that committed us to maintaining a whole lot of infrastructure and safeguarding customer data, which ended up being [more than our small company could manage](/blog/2019/04/convergence-development-edition/).  Thus, we repositioned the product to be self-serve, which allowed us to focus primarily on the product as opposed to a hosted production infrastructure.  This was also a necessary prerequisite to open-source.

When we launched it was clear that this was a fairly niche area of software development.  We anticipated the market moving towards RTC software, and that is indeed how it has panned out, albeit much more slowly than we would have liked.  Today, to all but a tiny slice of the software industry, RTC is just a checkbox to tack onto a list of product features.  However, it doesn't take much imagination to envision an entirely new cohort of startups building RTC into their webapps from day one.  There are now enough examples of good RTC webapps out there to drive forward-looking users to demand it in more of the products they use every day.  Yet it's still too difficult to do RTC well. None of the [existing open-source libraries](https://convergencelabs.com/realtime-collaboration-technology-guide/) have been sufficiently battle-tested to inspire much trust.  That's not to say that the Convergence of today is a finished product, but, we can say that it is the only solution backed by a real company with a deep pedigree building production-grade RTC applications.  A company that has built its brand around it and depends on it every day to deliver superlative RTC applications for its customers.  

After a few years of market exploration we have validated that Convergence is best suited to be open-source software (OSS).  Building in the open under the scrutiny of a global community of contributors will allow for a much better product today and in the future. Like it or not, almost all of the best and most-loved OSS is backed by for-profit companies that use it heavily internally.  It's a proven business model, and one that heavily contributes to the torrid pace of software innovation.  The difference for us is that we've never aspired to raise money, preferring to keep control over our business and do it the old-fashioned way: by making more money than we spend. 

# Updated licensing

Of course, we aim to encourage widespread usage in both commercial and non-commercial settings. To that end, we have structured the licenses to allow for easy adoption in most environments, while still ensuring that code contributions are available for the greater community. Thus, we will be be licensing as follows:

- The [server](https://github.com/convergencelabs/convergence-server) is offered under the [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html). It is only intended to be used via an official Convergence Client or via HTTP, so the copyleft requirement shouldn't affect most users.
- The [Javascript client](https://github.com/convergencelabs/convergence-client-javascript) is offered under version 3 of the [LGPL](https://www.gnu.org/licenses/lgpl-3.0.html).
- The Convergence [client-server protocol](https://github.com/convergencelabs/convergence-proto) project is offered under the Apache 2.0 license.
- The [administration console](https://github.com/convergencelabs/convergence-admin-console) is also offered under the GPL, as it is a stand-alone web application only useful when pointed to a server instance.

Please [contact us](sales@convergencelabs.com) if these licenses are insufficient for your particular environment.  We offer commercial licenses as well.

# Convergence Labs: Business as Usual

Believe it or not, this decision won't have a large material impact on our bottom line.  We have been deriving the lion's share of revenue from our services engagements anyway, and will still be offering Convergence Enterprise Edition as a ready-to-deploy set of packages optimized for scale with guaranteed support from Convergence Labs.  This is a tried-and-true open source business model.  Companies get the best of both worlds: the reliability of open-source code combined with the security of guaranteed support from the project's primary backer. 

Last but not least: like any young software company, we only exist because of those early adopters that believed in us and our vision.  Thank you.  You know who you are.

Onward!

Alec LaLonde<br>
CEO and Co-founder<br>
Convergence Labs, Inc.