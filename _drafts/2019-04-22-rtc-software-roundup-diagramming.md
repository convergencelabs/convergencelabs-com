---
layout: post
title: "Real-time Collaboration UX Round-up: Diagramming Software"
description: "Our first category-specific overview covers the most popular web-based diagramming software out there: who has multi-editing functionality and how do they stack up?"
date: 2020-04-09 10:21:01 -0700
categories: [convergence, RTC software roundups]
featured_image: /assets/images/blog/convergence-de.png
author: alec
crosspost_to_medium: true
---
Real-time multi-editing functionality is slowly spreading over the entire software landscape.  In the last few years we've seen the major players in office software (Apple, Microsoft) add [real-time collaboration](/blog/2017/02/redefining-realtime-collaboration/) (RTC) to their own offerings.  

Over the years, we've looked at a _lot_ of software advertising RTC functionality.  Of course, the depth and breadth of each implementation has varied widely.  To build a future where people can be as productive working together remotely as they do in the same room, the tools have to improve.  A lot.  That's where we come in.

So what makes for a good collaborative experience?  Well, [we covered that broadly here](/blog/2017/09/what-makes-for-a-great-collaborative-editing-experience/), but with this sort of thing it's useful to have some examples.  

Thus, we're going to do a series of real-time collaborative software round-ups, categorized by software type.  How do different vendors stack up?  Who provides the best experience?

We'll start with some diagramming tools.  They're a natural fit for RTC: visual, communicative, ubiquitous.  We'll try to avoid general aesthetic critiques (as much as is possible) and instead focus on what works, what doesn't, and any particularly awkward or intuitive UX.



- Local Undo / redo is challenging
- Talk about how latency + experience has to be good enough to WANT to use the tool.

LucidChart:
- Latency: pretty good, <1s
- Collaboration awareness: minimal (object selections only. hovering over something that somebody else has selected shows their name in a popover). no cursors or selections in textareas, no shared pointers
- Granularity: ok. real-time text sync, just moving / editing shapes
- Presence: yes, with colors
- Communication: chat, comments
- Undo / redo: Local undo works surprisingly well. Can be glitchy. Tried redoing an arrow that was connected to a shape (that the other user deleted), it pointed it offscreen.
- History: needed to upgrade to test



Sketchboard:
- Latency: ok, 1-2s. location updates are pretty jerky
- Collaboration awareness: location (a bit awkward. leaving the canvas doesn't hide your 'cursor'), selections. no viewport
- Granularity: ok. no real-time updates while moving. text is character-by-character but slow
- Presence: only if the other person happens to be working in your viewport
- Communication: ephemeral chat. updates can be missed behind the palette board
- Undo / redo: yes, kinda. Possible to undo somebody else's change. very easy to get into a broken state
- History: none

Google Drawings:
- Latency: good, <1s
- Collaboration awareness: shared selections, shared cursors. no shared pointers
- Granularity: ok. character-by-character text, no real-time updates while moving
- Presence: yes, typical icons-in-toolbar 
- Communication: comments only. chat for non-anonymous participants
- Undo / redo: Yes, slightly glitchy. forward/back buttons are never grayed out. Managed to redo repeatedly an action that just moved an object up and up and up
- History: yes. can restore versions and name particular versions
Not listed as an offering anymore, discontinued ?

Creately (HTML version):
- Latency: Pretty fast, fastest of the bunch
- Collaboration awareness: none
- Granularity: ok. no character-by-character text
- Presence: Yes, typical icons-in-toolbar
- Communication: none yet. comments coming
- Undo / redo: Pretty broken
- History: none
Can't select an object that somebody else has focus on

Miro (web version):
- Latency: poor, >1s. mouse pointer smoothing necessary
- Collaboration awareness: good, toggleable shared pointers, shared selections (but only while editing). use labels as opposed to colors. no shared cursors
- Granularity: pretty good. real-tiem updates while moving something. no updates while freehand drawing
- Presence: yes
- Communication: chat, comments, video chat on paid plans
- Undo / redo: Yes, limited. can't undo an action after somebody else did a similar change afterwards
- History: yes, no restore ability though

Miro (formerly RealtimeBoard) has the fullest-featured offering of the bunch, with a full plugin ecosystem and rich set of collaboration tools. Unfortunately, the first thing we noticed was the high overall latency.  While typing, the new text doesn't show up on the other collaborators' screens for over a second.  This is especially unfortunate because it somewhat mars the remote pointer feature: due to the latency between updated mouse positions, changes between positions are animated. This is probably better than just re-rendering the cursor at 0.5 frames per second, but makes for a slightly awkward experience.

Miro takes an interesting approach to collaboration: while another participant is editing an object, that object shows a gray background indicating that it is essentially locked.  This can prevent conflicts, but can be rather heavy-handed. For instance, if you drag around the central item in a mind-map diagram, any connected nodes currently being edited won't move along with it.  So even if one user is just editing a node's text

Miro decided to lock text edits to a single participant, even though text changes are broadcasted character-by-character. 

No RTC: mxgraph, JointJS, ...



Sketchboard is another RTC-capable web-based diagramming tool with a playful feel.  Anonymous usage is allowed, but no presence of others is communicated.  So other people can be updating the diagram, but you don't know it until they actually make a change and the change flashes green. 

Once you're logged in, you can see others' mouse locations, albeit a bit awkwardly.  Positions are represented by an avatar and name rather than the customary colored mouse pointer. Location updates are a bit jerky, maybe 3-4fps, but at least you know roughly where other people are working.  However, there's no minimap to give a high-level perspective of where the other participants' (or yours for that matter) viewports are. So if another person happens to join the document and work in a different area than you are, you may have no idea of their presence at all. 

Real-time updates: Changes are communicated reasonably quickly.  Text edits are communicated character-by-character with a few seconds' latency.  When dragging an element, only the final position of the element is shown.  Same thing when drawing freehand: you can't see the shape *while* it's being drawn.
When a remote change is made, the diagram updates accordingly with the changed element(s) flashing. 

Undo and redo are offered but can unfortunately be unreliable. We managed to get the app in a fairly broken state with a combination of two users moving elements around, changing their geometry, and undoing and redoing.  One user ended up with an extra shape that the other didn't.  

Communication: Comments are a nice touch, with a global list of comments including a handy click-to-select-object feature.  An ephemeral chat is also provided. 

Scales:
- Latency: 
  1 = greater than 1 second, 3 = less than 1 second, 5 = less than half a second
- Collaboration awareness: 
- Granularity:
- Presence: 
- Communication:
- Undo / redo:
- History: 


|                         | Lucidchart | Sketchboard | Google Drawings | Creately         | Miro      |
|-------------------------|------------|-------------|-----------------|------------------|-----------|
| Latency                 | good, <1s  | poor, >1s   | good, <1s       | excellent, <0.5s | poor, >1s |
| Collaboration Awareness |            |             |                 |                  |           |
| Granularity             |            |             |                 |                  |           |
| Presence                |            |             |                 |                  |           |
| Communication           |            |             |                 |                  |           |
| Undo/redo               |            |             |                 |                  |           |
| History                 |            |             |                 |                  |           |