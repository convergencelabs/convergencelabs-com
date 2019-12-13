---
layout: post
title: "Typedoc Custom Modules Plugin"
description: "Built for the Convergence JavaScript Client API docs, the TypeDoc Custom Modules Plugin enables a flexible means of categorizing your TypeScript entities with @module and @moduledefinition comment tags."
date: 2019-12-12 21:51:01 -0700
categories: [community, open source]
featured_image: /assets/images/blog/typedoc-logo-128.png
author: alec
crosspost_to_medium: true
---
[Typedoc](//typedoc.org) is the most comprehensive documentation generator for the Typescript language.  It was architected to be modular and extensible.  It generates a JSON file describing the contents of your codebase and provides the ability to override a default theme to render the contents of this file however you'd like.  There are a wide variety of user-contributed custom plugins and themes.

<figure class="float-right" style="max-width: 250px">
  <img src="/assets/images/blog/typedoc-sidebar-screenshot.png" alt="old docs sidebar"/>
  <figcaption>Original API docs sidebar. Rather unwieldy...</figcaption>
</figure>

The lion's share of Typedoc's development was done in the early days of Typescript, and while the Typescript language has enjoyed huge adoption and admirable community contribution, Typedoc has lagged a bit over the past few years.  It has kept up with Typescript's releases reasonably well, though, and remains the most robust TS documentation generator out there.  

Over the last few months we've made a big push to improve our documentation.  As of a month ago we had documented every public method and member in the entire API (no small feat!), but the generated documentation site still left much to be desired.  For a beginning user, discoverability was awful: Since *all* exported constructs were just lumped together on the index page, users had no idea which classes were the common entry points to the library.  The only way we could get around this was by creating a custom `index.md` page with a couple paragraphs of introductory text and links to a few of the entry classes. Once you clicked into a class, there was no longer any context about where you were in the library and what the related classes / interfaces were.

So, we scoured the various existing Typedoc plugins.  The most popular existing plugins were designed for [relatively small codebases](https://ui-router.github.io/core/docs/latest/) and didn't scale well for us, so we opted to create our own.  We wanted a simple way to group portions of our library into "modules" which would correlate to Convergence's subsystems.  Thanks to Typedoc's excellent comment tag support, we were able to create a plugin that would parse to `@module` and `@moduledefinition` tags.  Constructs tagged with `@module` ([example](https://github.com/convergencelabs/convergence-client-javascript/blob/master/src/main/model/ModelService.ts)) are grouped beneath their corresponding `@moduledefinition` ([example](https://github.com/convergencelabs/convergence-client-javascript/blob/master/src/main/model/index.ts)).  Module definitions are treated as "modules" which then appear in the default theme's right sidebar.  These `External module`s  are first-class entities, which mean they are always listed in the default theme's right sidebar and are also in the curren't navigation's breadcrumbs.  When "inside" a module, only the constructs tagged with that module appear in the right sidebar.  This is a logical grouping that we feel greatly improves the navigability of our API documentation.

This is only the initial version of the custom modules plugin, of course.  It meets our immediate needs for "module" organization.  Check out the plugin [here](https://github.com/convergencelabs/typedoc-plugin-custom-modules), and let us know if you have any issues or feature requests over at the GitHub repo.

- [GitHub Repo](https://github.com/convergencelabs/typedoc-plugin-custom-modules)
- [Convergence Javascript Client API Documentation](https://docs.convergence.io/js-api/)
