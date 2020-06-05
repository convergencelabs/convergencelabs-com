---
layout: post
title: "New Geo Sketch Demo"
description: "We recently worked with the Esri ArcGIS JavaScript API to develop a collaborative geospatial editing application. Read about it here!"
date: 2020-06-04 12:00:00 -0700
categories: [convergence, integrations]
featured_image: /assets/images/blog/geo-sketch-demo.png
author: michael
crosspost_to_medium: false
---
[Geographic Information Systems](https://en.wikipedia.org/wiki/Geographic_information_system) facilitate the visualization and analysis of geographically-related or geospatial information. Many industries such as oil and gas, supply chain management, economics, politics, and law enforcement rely heavily on GIS systems rendering geospatial information on maps for human analysis. Enabling real time collaboration in GIS systems can dramatically improve workflows across many of these industries. Imagine for example an emergency management response system focused on natural disaster recovery with multiple uses spread across regional / local operations centers as well as first responders on the ground. The ability to collaboratively plan and task resources in real time during an emergency can increase efficiency, reduce response times, and ultimately save lives.

[Esri](https://www.esri.com/) is a leading provider of GIS software, and their flagship product line [ArcGIS](https://www.arcgis.com/) is one of the industry's most used GIS suites. ArcGIS provides a [JavaScript API](https://developers.arcgis.com/javascript/) for 2D and 3D geospatial visualization in a web browser. We recently created a new demo application that demonstrates how Convergence can be used to enable realtime collaboration in GIS applications. We built the demo app in [React](https://reactjs.org/) using the ArcGIS JavaScript API for geospatial rendering and [Convergence](https://convergence.io) to provide the realtime collaboration. The integration between Convergence and ArcGIS was fairly straightforward and the entire app was built over the course of just a few days by one developer. This shows the power of the Convergence framework to rapidly enable collaboration in complex use cases.

The main features of the app include:

- A buddy list to show who is online.
- Chat between users in the app.
- Shared pointers to help predict remote users' actions.
- Shared viewport collaborative cues to know where the other users are looking (sometimes called a minimap).
- Shared selection to see what the other users are editing.
- Realtime editing of geometries as well as data associated with the geometries.
- Remote viewport preview, goto, and linking.

You can check out the demo here: [https://demos.convergence.io/geo-sketch/](https://demos.convergence.io/geo-sketch/)

The source code for the demo can be found here: [https://github.com/convergencelabs/geo-sketch-demo](https://github.com/convergencelabs/geo-sketch-demo)

We'd love to get feedback from the community on how we could enhance or improve this demo to really show off the power of Convergence for GIS. Drop us a note on the [Convergence Community Forum](https://forum.convergence.io) or join us on the [Convergence Public Slack](https://slack.convergence.io).

Enjoy!
