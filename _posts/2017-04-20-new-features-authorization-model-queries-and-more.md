---
layout: post
title:  "New Features: Authorization, Model Queries, and More"
date:   2017-04-20 15:09:21 -0700
categories: convergence.io
featured_image: /assets/images/blog/update.jpg
author: Michael MacFadden
excerpt_separator: <!--excerpt-->
---
We have been hard at work adding several major new features in the platform that have been keeping us busy 24×7. See what we have been up to.
<!--excerpt-->
# What’s New?
Some of our followers noticed that we hadn’t had a blog post in over a month, and were wondering what we were up to. We have been hard at work adding several major new features in the platform that have been keeping us busy 24×7. The good news is we have launched these features which significantly increase the value and utility of the platform. We thought it was a good time to take a breath and update the community on what’s been released:

# Domain Sharing
You can now share your Domains with other Convergence users, making collaborating with teammates significantly easier. You can share the domain from the Members tab of the Domain Settings screen inside each domain. You can decide if the users you share the domain with are developers or administrators of your domains. Both can access all of the information in the domain, but only administrators can set the privileges of other users.

# Session Browsing
We added a preliminary “Sessions” view which allows you to see current and past connections to your domain. The session browser shows important information like the username, IP Address, and user agent of the connecting client. We’ll be expanding this capability in the future, but this initial feature provides important insight into the usage of your domain.

# New Model Editor
We received a lot of feedback on our original model editor. We have made significant improvements to the model editor making it both easier to use and more powerful. New features include changing positions of array elements, search, a raw source editor (in JSON), and a path control that helps you see what you have selected.

# Model Permissions
You can now view which domain users have access to models at both the collection and model level. You can independently set create, read, write, delete, and manage permissions for any model or collection in the system. Both the client API and Admin Console have been updated to provide easy mechanisms to control and configure permissions.

# Model Queries
We have introduced a powerful SQL-like query language for finding models and extracting data from models in the system. The model query system is integrated with the new permissions system so that users can only query for models they have permissions to. The model browsing UI has been significantly improved to leverage the new query system.

# Date Data Type
Realtime Models now natively support the JavaScript Date type. The new RealTimeDate allows you to work with dates without the need to convert them to numbers or strings to persist them. This is the first instance of Convergence supporting custom data types beyond simple JSON and lays the foundation for more complex custom data types.

# Model Snapshot Configuration
Model Snapshots greatly improve the performance of the model history subsystem. We have always had model snapshots, it was just impossible to configure the way the system took snapshots on a per-domain basis. Users can now manage the snapshot settings for their whole domain as well as for individual collections.

# User interface and API improvements
We have taken a lot of feedback on the usability of the Admin Console and the Client API and have made many improvements to make them both more enjoyable to use. Thank you to our alpha testers for providing valuable feedback.

# What’s next?
We are quickly coming to the end of our Alpha program. We are still working on a few last bits of functionality based on feedback from our users. In the next few weeks we will be delivering those features and then moving to a Public Beta that will gradually be open to anyone interested in using the product.

Stay tuned for upcoming announcements on new features and the release of the public beta!