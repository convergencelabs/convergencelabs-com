---
layout: post
title:  "What Makes for a Great Collaborative Editing Experience?"
date:   2017-09-30 15:09:21 -0700
categories: ux editing
featured_image: /assets/images/blog/laptop-typing.jpg
excerpt_separator: <!--excerpt-->
---
We have built a lot of collaborative apps over the years, and with the modest goal of making collaborative apps incrementally better, would like to share what we’ve learned with the community.
<!--excerpt-->
Any application involving shared data can benefit from collaborative editing. Yet the ability to simultaneously work on the same document while not stepping on one another’s toes is tricky, and there are not a lot of good examples out there. Unfortunately, there are an awful lot of poor implementations of collaborative editing, which can lead people to opt out in favor of a more non-realtime approach, or worse, abandon the idea altogether. We have built a lot of collaborative apps over the years, and with the modest goal of making collaborative apps incrementally better, would like to share what we’ve learned with the community. After all, you wouldn’t want to waste the effort of implementing shared editing support by pissing off your users!

# Conflicts are hard to deal with, so try to avoid them entirely
When working in person, there are all sorts of non-verbal cues we rely on to gather intent and emotion. When someone is reaching out to grab a whiteboard marker, we know they intend to start writing, so we may step back from the whiteboard in anticipation, or at least avoid writing in the same place. In the digital world, most of these cues are lost (even if your boss forces you to have your webcam on all day!) Thus, we have to come up with alternatives.

# Contextual Presence
In a CRM app, you may not care if someone is editing a different lead than the one you are on, but if multiple people on a team are editing the same one, they will certainly want to know! The concept of presence is as old as computing — who is currently available (“logged-in”), and what are they currently working on? It may be useful to show the status of people working in another part of the app, and it may not — it’s up to you, the product designer, to decide.

# User intent
In the physical world, we have body movements. In the virtual world, we have limited tools such as a mouse pointer and / or a cursor to signal user intent. With such limited options, it is easy to see how poorly most collaborative software conveys these signals. Sharing cursors in a rich text document is obvious, but what is the parallel in a diagramming app? Whichever data is being edited needs some sort of state to signal that it may be about to change and the user intending to act on it. This is typically represented by some sort of selection (e.g. an outline), and a color representing the acting user. And again, it may be useful to show your collaborators’ colored mouse pointers as they track across the canvas, and it may just be an annoyance. There are certainly use cases for either.

# Authorization
Not everybody wants people to see what they’re doing all the time. Respect that.

We all have our preferred modes of operation, and desired levels of privacy. Managers may not want their subordinates to see their unfiltered thoughts. Designers might not want their clients seeing their vision half-complete. Like with any software product design, getting input from major stakeholders is key. This includes teasing out people’s preferences and workflows when they may not seem immediately relevant.

# When all else fails…
Most discussions of realtime collaboration center around the algorithms for resolving data conflicts. However, you’ll see that the most successful products focus inordinately on avoiding them in the first place. The best conflict resolution algorithm won’t matter when Sam and Tyra are simultaneously inserting text in the exact same place. It’s chaotic and they will be annoyed — why didn’t it tell me he was already working on this?

Unfortunately, sometimes unavoidable circumstances such as latency cause conflicts to arise. In these cases they must be resolved gracefully and consistently. After Sam reconnects, he must see the exact same document as Tyra. Anything else leads to a broken, unproductive and frustrating collaboration session.

# Collaborative UX — the missing piece
There are a number of resources out there for building collaborative editing into your application. But we’ve been in the trenches, and know that a great collaborative UX is what sets apart a transcendentally productive app from a frustrating one. That’s why we’re the only solution with built-in APIs for handling collaborative UX. Try us out and see for yourself.