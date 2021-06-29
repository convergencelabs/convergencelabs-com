---
layout: post
title: "Convergence Scalability"
description: "We frequently get asked how many concurrent users, connections, models, etc. Convergence can support. Check out this post to understand the answer!"
date: 2021-06-29 12:00:00 -0500
categories: [convergence]
featured_image: /assets/images/blog/scalability.jpg
author: michael
crosspost_to_medium: false
---
# The Question?
A common question we get asked is "how many concurrent connections, user, models, etc. a Convergence Server can handle?"  Another variant of this same question is, "How much memory, storage, or CPU do I need to run Convergence?".  This article hopes to partially answer this question.

> TL;DR It depends on your data and how your users use the application. On Amazon Web Services, a t2.medium for a demo deployment or a t2.large or larger for a real deployment.

# The Answer
It is actually pretty hard to generalize the number of users that can be supported or amount of resources required support.  It's somewhat like asking "how many boxes can a person pick up?". The answer to this question would depend on how big the boxes are, how heavy they are, and how strong and coordinated the person is.  That is to say, the answer to the question is scenario dependant.


# Some Notable Scalability Factors
Use cases for Convergence vary widely, and the specifics of the use case can drastically effect the scalability aspects of the Server.  We'll try to address several of the facets here.

## 1. Model Size
If your models are larger, then they will obviously take up more storage, and use more network bandwidth when they are created and loaded. They will also use more memory when loaded into memory.

## 2. Mutation Frequency
Different types of data and user interfaces typically generate operations at different rates.  Take a code editor for example. The user of a code editor is usually typing at around 2-4 characters per second, and has sustained bursts of typing for 10-30 seconds followed by periods of no typing while they contemplate the next few lines of code. On the other hand, the user of a vector drawing application may drag an object on the screen generating 30-40 operations per second (if not throttled).

Higher rates of mutations put more load on the server in terms of CPU and Storage.

## 3. Mutation Payload Size
Back to our code editor, if the individual mutations ar character-by-character typing, then the payload of the operation is very small, often a single character.  On other hand, looking at the vector graphics editing program, the payload of the of the operation might be complex polygon data represented in JSON, which is several orders of magnitude larger. These larger operation payloads will use more network bandwidth to send / receive, more CPU to serialize / deserialize, and more storage to store.

## 4. Concurrency and Conflict Resolution
Depending on the use case and the [effectiveness of collaborative cueing](https://convergencelabs.com/blog/2017/09/what-makes-for-a-great-collaborative-editing-experience/), users may more or less likely to be editing in areas that generate conflicts that require algorithmic resolution.  More conflicts requires more data transformation and conflict resolution.  This generally requires more CPU.

## 5. Session Behavior
The application's session behavior also makes a difference.  Does an applicaiton simply connect and hold a persistent connection without doing much?  Does it open several documents and hold them open even if there is no active editing? How long are session generally open for? These factors can all impact resource utilization.

# Example Numbers
We have seen several use cases where a single Convergence Server running on a [t2.large](https://aws.amazon.com/ec2/instance-types/t2/) (on [Amazon web Services](https://aws.amazon.com/)) was able to handle 400 concurrent users in a text editing based collaboration application.

## Minimum Resources
To deploy the [Convergence Omnibus Container](https://hub.docker.com/r/convergencelabs/convergence-omnibus) We generally recommend providing Convergence at least 2 modern CPU Cores and at least 4 GB of Memory. On AWS a [t2.medium](https://aws.amazon.com/ec2/instance-types/t2/) will run the Omnibus Container and the [Convergence Examples](https://github.com/convergencelabs/javascript-examples) reasonably well.

## Recommended Resources
We generally recommend providing Convergence at least 2 modern CPU Cores and at least 8 GB of Memory. On AWS a [t2.large](https://aws.amazon.com/ec2/instance-types/t2/) makes a good instance (but mind your burstable CPU credits).

# Conclusion
While we are working to document some simple use cases as examples that show the realm of the possible. A cookie cutter answer is difficult to provide, and not likely applicable to your use case.

The best way to determine scale is to build a small proof of concept application the pumps data and mutations through the server.  A simple test harness that just feeds data and makes modifications to data structures at the rate a use would is a great first step. From here you can see how the server scales and responds to load. 
