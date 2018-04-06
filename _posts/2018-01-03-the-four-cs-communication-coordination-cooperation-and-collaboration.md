---
layout: post
title:  "The Four Cs: Communication, Coordination, Cooperation, and Collaboration"
description: When designing user interfaces for multi-user software products, keep in mind the 4 Cs. 
date:   2018-01-03 15:09:21 -0700
categories: [design, realtime collaboration, ux]
featured_image: /assets/images/blog/letter-c.png
author: Michael MacFadden
excerpt_separator: <!--excerpt-->
---
When designing user interfaces for multi-user software products, keep in mind the 4 Cs. 
<!--excerpt-->
<p>Designing and developing great software systems that allow users to effectively work together is no easy task. Doing so requires a solid grasp of several fundamental concepts in so-called “groupware” systems.  One such concept is an understanding of the ways in which people tend to interact with each other while working together. In the physical world, this is governed by the relationships between them, their individual skill sets, their world views, their shared understanding (or lack thereof) and a variety of external influences such as overarching organizational roles and policies. These factors also apply to user interactions facilitated by software, and can be segmented into one or more “interaction modalities”. Understanding these modalities of interaction and how they relate to your application’s specific use cases is crucial when building systems that support remote users working together. 
<p>
The model that describes how people interact put forth in this post is the “Four Cs Model" <a href="#cite-1">[1]</a><a href="#cite-2">[2]</a>. It defines four main interaction modalities: 
<ul>
  <li><strong>Communication</strong>: The exchange of ideas and information</li>
  <li><strong>Cooperation</strong>: Independent goals with agreements not to interfere with each other. </li>
  <li><strong>Coordination</strong>: Actions of users directed by a coordinator to achieve a common goal. </li>
  <li><strong>Collaboration</strong>: The process of shared creation; collectively creating something new that could not have been created by the individual users. </li>
</ul>
<p>
Let’s take a look at each of these and apply them to building effective “groupware” systems. 

<h3>Communication </h3>
<p>
Communication is the process by which information and ideas are exchanged between users. Communication helps users to develop shared understanding, communicate their goals and objectives, and come to consensus. Email, chat, video and audio conferences are all common examples of communication in software systems. Communication can occur between two specific users, between a group of users, broadcasted, or between users and the system itself. Communication can be one-way or two-way and can happen synchronously (real-time) or asynchronously (non-real-time). For example: 
<ul>
  <li><strong>Group Email List</strong>: Two-way, group, asynchronous</li>
  <li><strong>Direct messaging ("chat")</strong>: Two-way, user-to-user, synchronous </li>
  <li><strong>Video conference</strong>: Two-way, group, synchronous</li>
  <li><strong>Web Site</strong>: One-way, broadcast, asynchronous </li>
</ul>
<p>
When thinking about enabling communication in a software system, designers must consider <em>when</em>, <em>how</em>, and <em>why</em> users will need to communicate with each other. For certain situations text-based chat might be optimal while for others voice communication may be more efficient. Furthermore, for systems with many users, communication can quickly become noisy, making it hard for users to separate the important communications from the unimportant. Understanding the user’s goals and how they change over time is important for effective communication mechanisms. Communication almost always has context, and that context informs what the user is currently doing in the system. 

<blockquote>
The main challenges when designing communication within software systems are mapping communication to the appropriate context, providing the right communication mechanisms at the right time, and bringing important communication to the forefront at the right time. 
</blockquote>

<h3>Cooperation</h3>
<p>
When users are cooperating, they each have their own goals, but behave in such a way as to not interfere with each other. A good example might be two children independently coloring separate pictures, but with a shared box of crayons. Each child is primarily concerned with drawing her own picture and is not overly concerned with the picture drawn by the other child. However, the children agree to return crayons to the box when they are not actively drawing with them, so they will be available to the other child. Furthermore, if one child needs a particular crayon that is in use, that child can let the other child know he needs it, and the child using the desired color can return that crayon to the box. 
<p>
In cooperative systems users may communicate more often in times where their individual goals overlap or when there is potential for conflict. They may communicate less often when their goals don’t overlap very much. Sometimes “rules of engagement” are established beforehand that define how cooperation will occur; other times cooperation happens in an ad hoc fashion. A key point is that when users are cooperating they don’t necessarily have to be aware of the other users’ goals / objectives. They only have to know how to behave in order to not interfere. In the drawing example, neither child needed to know what the other child was drawing. They only had to know how to behave with regard to the crayons. 
<p>
If your users need to cooperate, the system should afford them a wide degree of flexibility in working independently, but also allow them to understand when cooperation with another user is required. When cooperation is required, the system must provide sufficient communication mechanisms or other indicators for all users to know how to work together without interfering. 

<h3>Coordination</h3>
<p>
In coordinated systems, users' actions are directed by a coordinator in order to achieve common goals. Systems that use coordination are often hierarchical or role-based, since by definition the coordinator assigns tasks and the other users carry them out. It is the job of the coordinator to determine which users are best suited to perform which tasks, and to develop processes and assignments that lead to achieving the desired goals with the least amount of waste. The objective of coordination is to ensure that each participant is aligned with an overall goal, or “pulling in the same direction.” Simply put, coordination is about efficiency. 
<p>
In a coordinated system, it is entirely possible that the individual users are not fully aware of the macro-level goals of the coordinator. They simply carry out the tasks that were assigned to them. Communication in a coordinated system often centers around the assignment and status of tasks. There can be communication between users, but much of the communication is focused on the link between the coordinator and the users. 

<blockquote>For successful coordination users need to know what they are supposed to do, and how their actions contribute to the group's goal.</blockquote>

<p>
When building systems that rely on coordination, it is critical to understand users' roles and the tasks they are supposed to carry out. Often, there should not be a wide degree of latitude or flexibility in the system. The system should put what the user is supposed to do directly in front of them and make it as easy as possible for them to accomplish their task. 

<h3>Collaboration</h3>
<p>
Collaboration is all about shared creation. In a successful collaboration, the users have a high-level shared vision of the goals they are trying to achieve, but they may not fully understand how they are supposed to get there. Each user comes to the collaboration with different skill sets, world views, and ideas about how to achieve their shared goals. Ideally, users will bring complementary skill sets allowing them to create something new and of higher quality than any of the individual users could have created independently. 
<p>
In <a href="/blog/2017/02/redefining-realtime-collaboration/">real time collaborative systems</a>, users need to be able to explore their own ideas independently but also need to be able to come together to exchange ideas in order to fuse multiple viewpoints into a single shared output. Users need to see what the other users are thinking to build off of those ideas by applying their own unique skill sets. Collaboration values ideation and creation over process and efficiency. Users may iterate and explore in an attempt to continually refine the work product.
<p>
In physical collaboration (not in software), high-performing groups will eventually self-organize. 

<blockquote>To be successful, collaborative systems need to be flexible enough to promote independence, exploration and group self-organization.</blockquote>
<p>
In some instances, you may find sub-groups form and temporarily adopt one of the other interaction modalities (such as coordination) and then return to the collaboration with some portion of the work product. Communication also needs to be very flexible since the exchange of information can flow between any users and the most efficient form of communication may vary widely between groups of users depending on how they are interacting. 

<h3>Summary</h3>
<p>
There is no “best” style of interaction that works for all systems and users, but we can suggest a few guidelines: If creativity with a focus on common goals is paramount, then collaboration might be ideal. If a high degree of independence is needed cooperation may fit the bill. If process efficiency is king, then coordination could be the answer. In fact, you may find that the system you are trying to build requires a combination of these interaction styles depending on the task at hand. Groups of users may need to move in and out of the different interaction modalities as the work evolves. Some users in your system may be coordinating while others are collaborating. Failing to provide the right interaction style at the right time will lead to friction in the system and lower user satisfaction. 
<p>
While the full complexities of user interaction in the context of software systems can’t be fully explored in a single blog post, having a basic understanding of the "Four Cs" is a great foundation from which to start designing a multi-user software product.  At Convergence Labs, we’ve designed dozens of successful collaborative applications. If you are considering providing real time collaboration in your app, <a href="/contact/">get in touch with us</a> and we can help you design a great user experience your users will love. 
<p></p>
<div id="cite-1" class="cite">[1] <a href="http://proceedings.aom.org/content/2014/1/13532?related-urls=yes&legid=amproc;2014/1/13532">http://proceedings.aom.org/content/2014/1/13532?related-urls=yes&legid=amproc;2014/1/13532</a></div>
<div id="cite-2" class="cite">[2] <a href="http://www.sccharterschools.org/assets/documents/collaborationvsthe3cs.pdf">http://www.sccharterschools.org/assets/documents/collaborationvsthe3cs.pdf</a></div>