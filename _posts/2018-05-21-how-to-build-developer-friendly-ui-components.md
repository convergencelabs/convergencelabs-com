---
layout: post
title: How to Build Developer-Friendly UI Components
description: "Over the latest decade or so, the majority of reusable UI components were built with solely the user in mind.  But as users demand increasingly rich experiences, modern UI components will need to also consider extensibility and programmability.  In this article we describe how to build developer-friendly UI components."
date: 2018-05-21 13:40:21 -0600
categories: [realtime collaboration, software development]
featured_image: /assets/images/blog/component-api.png
author: Michael MacFadden
crosspost_to_medium: true
---

As software development continues its inexorable climb towards higher and higher levels of abstraction, we're increasingly using APIs to avoid writing boilerplate code.  This has required re-thinking software architecture to be able to better support extensibility and modularity.  On the server side, this trend is obviously apparent in the push towards microservices and serverless architectures, but the client side has not been able to keep pace.  We see this as a crucial impediment towards moving the state of the art forward for the user-facing components of software as well.

Most developers do not build their own UI components, but rather leverage components from either the platform they are deploying on or one of the many high quality open source projects out there. Unfortunately, developers often encounter a lot of friction with these UI components when trying to add realtime collaboration and other advanced functionality to their app. This post is focused on explaining why this is, and what UI component developers can do to make their software more developer-friendly.


### What’s the problem?
Most UI components were originally designed for single users performing predictable actions, like writing or editing rich text.  Their entire architecture makes the assumption that only one user will be editing data at any given time, and that there is no other software interested in the events and actions of this user.  These assumptions have led to design decisions that make integrating functionality such as Realtime Collaboration prohibitively difficult.

### An Example
As a simple example, assume that we were trying to make a web-based realtime collaborative plain text editor using the dependable `HTMLTextAreaElement`. For a single user, this is pretty easy. We simply add the `<textarea>` to our web page, and we are off to the races.  But now let’s make it realtime, with character-by-character collaboration between two users. Let’s assume we are using some third-party API (like Convergence or ShareDB) to handle the communication between users.

Let’s look at the API we have at our disposal. We can use `textarea.value` to get and set the entire value of the text area. We can listen to events like `change` and `input` to be notified when the value changes. Let’s assume we bind to the `change` event. When the user types something the `change` event will fire. But we don’t actually know what they did: we can only look at the current value of the text area.  The only way to figure out what they did is to keep the old value of the text area and do a diff against the new value. (yuck!) We could try to bind to the `keyup`/`keydown`/`keypress` events, but now we have to implement all of the logic of applying key events to the data model. (even more yuck!)

Let’s assume we got that to work somehow and we are now on the receiving side. I now get informed that the remote user inserted some text, and I want to update my text area. How do I do that? The only thing I can do is set the entire value of the text area. I must actually get the current value, do some string manipulation to insert the remote users text, and then set the whole value back (😫 why is this so hard?). Ok, did that… another surprise. When you set the value of a text area, the local user's selection is cleared and their cursor position (and scroll) is moved to the end of the text area, disrupting any typing they may have been doing.. and we haven’t even considered things like shared cursors and selections. This is becoming ridiculous, and we are only working with a simple text area. 

We have actually built a [set of utilities](https://github.com/convergencelabs/input-element-bindings) to take care of all of this for simple HTML Input Elements for you. But in general, it just shouldn’t be this hard!  And if you think this is hard, imagine a more complex component.

### What can be done?
UI component developers need to think about programmability from the ground up.  The primary user base should still be the end user, but to stay relevant, developer consumers must be considered as well.  The good news is that designing for extensibility forces you to have a solid core and well-architected piece of software.  The bad news is that it requires a bit more architecture effort up front.  

We at Convergence are primarily concerned with realtime collaboration, but as we will explain below, an API that supports multiple concurrent users well will also support all kinds of other functionality.  To this end, the three main areas of consideration are 1) the data model, 2) a data-focused API, and 3) a UI-focused API.

### Data Model
The design of the data model significantly impacts a UI component's extensibility. The main considerations in choosing a data model are 1) the granularity at which data can be changed and 2) the ease of describing _what_ changed. Essentially, developers should identify the smallest, most primitive operations a user can make to the data and ensure that the data model easily supports making changes at this granularity. They should also ensure there is a simple way to describe small individual changes.

An anti-pattern example would be the data model behind HTML's `contentEditable` concept[^1]. Here, the data model is the _tree-based_ DOM (whereas the user perceives flat rich text). A simple primitive action like selecting a range of text and making it bold requires 4 or 5 mutations to the tree including insertions, deletions, reparenting, and setting attributes. The user performed a fairly simple operation, but the corresponding changes to the data model were complex, because the data model is inherently a poor representation.  Additionally, the way the DOM API describes the change is a complex DOM Mutation Event, so we have to inspect tree paths, nodes, and offsets to describe (and communicate to other users) what happened. Meanwhile, the user could describe the change much more simply: “make characters 10 through 25 bold”.

The data model should be designed with an understanding of how the user perceives granular changes and the intention of those edits. The data model and its mutations should be aligned to that perspective where possible. If performance concerns make this problematic, the data model and mutations should be easily transformed by the API into those concepts.

### Data-focused API
The principle concern for a UI component's API is the ability for consumers to mutate a UI component's data and listen for changes to it.  Let’s re-examine the plain text editor we were trying to build using the `HTMLTextAreaElement`. Imagine there were two new events, `textInserted` and `textDeleted`, that were fired when text was inserted or deleted from the text area. The events can be fired after each individual key stroke, providing great granularity:

```
interface TextInsertedEvent {
  src: HTMLTextAreaElement;
  index: number;
  text: string;
}

interface TextDeletedEvent {
  src: HTMLTextAreaElement;
  index: number;
  text: string;
}
```

Further assume that these two methods were added to the `HTMLTextAreaElement` API:

```
insert(index: number, text: string): void;
delete(index: number, length: number): void;
```

Finally, let’s assume that the insert and delete methods preserve the local user’s selection and cursor position. At this point, creating a collaborative text area becomes a breeze. When the local user types in the text area, the developer gets nice events that tell them exactly what changed in the text area. These events fully specify what the user did, and the description of what happened is simple and easy to understand (e.g. what was inserted and the index where it was inserted). When dealing with remote users' edits, two equally simple methods allow us to “replay” remote mutations into the text area without interrupting the users' workflow.

You will notice that the events and the API are _reflective_ of each other in terms of the actions they describe / perform and the information they provide / consume. This makes it much easier for developers to deal with since there are no contortions to map the outgoing received events to the incoming methods they must call. The granularity of the events / methods, their symmetry, and their non-disruptive behavior are hallmarks of a great UI component API. Granted, a text area is a pretty simple component, but there are many other great examples of complex components that share these attributes (see [Ace](https://ace.c9.io/), [Quill](https://www.quill.com/), [JointJS](https://www.jointjs.com/), [CKEditor 5](https://ckeditor5.github.io/)).

### UI-focused API
The final aspect to building a developer-friendly UI component is its ability to allow consumers to programmatically affect the component's actual interface. In the realtime collaboration arena, collaborative cueing is the ability to indicate what remote users are doing (or what they are likely to do) to help avoid conflicts. The standard example of this is shared cursors / selections in plain text and rich text editors. In our plain text example above, even with the improved data model, events, and API, the UX with collaborative editing will still not be very good. The local user will be looking at the text area and edits will appear to be happening randomly and unpredictably. They will have no idea who is making the changes and won’t know where the next change will likely occur. This will be very disconcerting to the user. This is why most collaborative text editors provide shared cursors and selections.

When designing your UI component, consider your UX and the aspects that are most useful to include a programmatic interface.  If you know for sure your UI component will be used in a collaborative setting, and you want to use collaborative compatibility as a selling point for your component, you may consider adding the collaborative cueing mechanism yourself. In our `<textarea>` example another set of events / methods could be added:

```
CursorChangedEvent {
  index: number;
}

SelectionChangedEvent {
  startIndex: number;
  endIndex: number;
}

addRemoteCursor(id: string, label: string, color: string, index: number): void;
updateRemoteCursor(id: string, index: number): void;
removeRemoteCursor(id: string): void;

addRemoteSelection(id: string, label: string, color: string, startIndex: number, endIndex: number): void;
updateRemoteSelection (id: string, startIndex: number, endIndex: number): void;
removeRemoteSelection (id: string): void;
```

Again, notice the _symmetry_ between the events which describe the local user’s cursor and selection and the methods which allow you to inject the remote user’s cursor and selection. Now we have a fully capable component that allows us to make non-disruptive, granular edits, and to communicate who is doing what. 

If you aren’t certain how important supporting realtime collaboration will be for your component, you may not have to implement the entire collaborative cueing capability yourself. In this case, a lower-level API could allow this as well as a number of other uses. For example, in the case of the text area, a consumer of your API could easily add the collaborative cues if these API methods were already available:

```
getTextCoordinates(index: number): {x: number, y: number};
getLineHeight(): number;
```

With these two methods, a developer could easily add remote cursors to your plain text editor because you have given them tools to convert between the data model (text indices) and the visualization of the data (screen coordinates and line height).

Note that the specific API for your UI component will be heavily dependent on the shape of data it is dealing with. For example, a drawing tool will likely want to communicate a mouse pointer location rather than a cursor position, etc.

### Summary
Realtime collaboration is only one set of use cases these APIs could support: consider undo/redo, auto-scrolling content, and linking between multiple components.  Developers need to ensure that they have a flexible data model as well as a granular, expressive, and symmetrical API for both the data and UI. 

Developers are increasingly seeking out UI components with built-in APIs. Many UI component and framework developers have already realized this and have begun to incorporate them.  These components are getting the lion's share of new users and will increasingly continue to do so in the near future.

If you are a UI component developer interested in adding an API or support for realtime collaboration, but aren’t sure of the best way to proceed, [reach out](/contact) to us at Convergence Labs. We have built scores of collaborative components ourselves and have helped several UI component / framework vendors modernize their products.


[^1]: For the gritty details, see [this post](https://ckeditor.com/blog/ContentEditable%E2%80%8A%E2%80%94%E2%80%8AThe-Good-the-Bad-and-the-Ugly/) by the folks behind CKEditor.