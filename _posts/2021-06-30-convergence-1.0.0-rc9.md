---
layout: post
title: "Convergence 1.0.0 Release Candidate 9"
description: "With quick turn around, the 1.0.0-rc.9 version of Convergence has been released!"
date: 2021-06-30 12:00:00 -0500
categories: [convergence]
featured_image: /assets/images/blog/1-0-0-rc-9.jpg
author: michael
---
The Convergence team is pleased to announce the availability of [1.0.0-rc.9](https://github.com/convergencelabs/convergence-project/wiki/CHANGELOG#100-rc9-jun-30-2021). We've been busy in the last month since the last release.  1.0.0-rc.9 is a fairly major release with quite a bit of new functionality along with many important bug fixes. Due to the major changes, this post will be a bit longer than our typical release announcement.

Significant additions have been made to the [Convergence Developers Guide](https://docs.convergence.io/guide/). If you haven't looked at the Developer Guide in a while, it would be a good time to go check it out again. We also recommend you take a look at the [CHANGELOG](https://github.com/convergencelabs/convergence-project/wiki/CHANGELOG#100-rc9-jun-30-2021) for more details on what has changed.

## Release Highlights:
Release Candidate 9 notable changes:

* Activities have seen a major overhaul and are now a first class citizen in the system.
* Upgraded the Admin Console to AntD 4.x.
* New offline and maintenance modes for domains. 
* Initiation of domain database upgrades from the Admin Console.
* Ability to change a domain's ID.
* New, open-source, Developer Guide.
* API Documentation cleanup.
* Connection subsystem improvements and bug fixes.


## What's Next?
Check our road map [here](https://github.com/convergencelabs/convergence-project/wiki/Convergence-Road-Map) to see what we are focusing on in general.  Next, we intend to work on:

* Experimental Rich Text Support

As always, please report any issues in [GitHub directly](https://github.com/convergencelabs/convergence-project/issues), our [forum](https://forum.convergence.io), or our [Slack workspace](https://slack.convergence.io).

Happy coding!


## Additional Release Details
### Upgrading
This release marks the first time the Convergence and Domain Database Schemas have changed using the new database schema migration system. *If you are upgrading from rc.8 or earlier, then your databases will need to be upgraded.* It is highly recommended that you backup you data prior to upgrade. Please see the [documentation on upgrading](https://docs.convergence.io/guide/upgrade/overview/) before upgrading your Convergence server.

### Collection Auto Creation
Prior to version 1.0.0-rc.9, when a user created a model, the collection specified would be automatically created if it did not exist. This is convenient for development and learning, but makes it hard to enforce permissions on who can create models and collections.  In 1.0.0-rc.9, automatic creation of collections is configurable. This feature is enabled in the automatically created default domain (just like anonymous authentication). Newly created domains will have this feature disabled by default. Users can enable / disable this feature in the domain settings.

### Activity Changes
This release brings a major update to the Activity subsystem.  Prior to this release, activities only existed in memory, there was no persistence. They only existed while at least one user was connected. This ephemeral nature made it near impossible to apply permissions to them. Activities also did not manifest themselves in the Admin Console.  Activity permissions was a highly requested capability.  Thus, Activities were refactored to be persistent, to have permissions, and a host of other capabilities.  We recommend that you review the new [documentation for Activities](https://docs.convergence.io/guide/activities/overview/) in the Developer Guide as well as the [API Documentation](https://docs.convergence.io/js-api/modules/activities.html).

#### Activity Types
Activities previously were only identified by an `id`. In 1.0.0-rc.9, Activities also have a user defined `type` that can be used to categorize them.  An activity's id only needs to be unique within its type. When joining, creating, or removing an Activity you must now specify the type as well as the id.

#### Creation and Deletion
Whereas you could only previously join an activity, you can now create and delete activities.  This allows activities to exist before a user joins it, and after the last participant has left.  A side effect, though, is that if a user is connected to an activity when it is deleted, the user will be forcibly removed from the activity. They will receive a `deleted` event on the Activity.

#### Auto Creation and Ephemeral Activities
Prior to 1.0.0-rc.9, a user could simply join an activity.  Now the activity must exist prior to joining.  However, to simulate the previous behavior, Activities can be automatically created when joining. Similarly, an Activity that is auto created can be marked as `ephemeral`, such that it is automatically removed when the last user leaves.  See the [Developer Guide](https://docs.convergence.io/guide/activities/participation/#auto-creating-and-ephemeral-activities) for more information.

#### Lurking
It is now possible for a user to join an activity to monitor its state, without appearing as a participant to other users. This is called `lurking`.  Users must have a specific permission to be able to lurk.

#### Permissions
Activities have permissions that control who can join, set state, manage permissions, etc.
The main thing to be aware of is that *when creating or auto creating an activity, only the user that created it will have permissions to access it*.  Other users will not be able to join unless appropriate permissions are set. See the [Developer Guide](https://docs.convergence.io/guide/activities/permissions/) for specific information on what permissions are available and how to set them.

#### Achieving Similar Behavior to Previous Releases
To achieve a behaviour similar to prior release you can auto create an ephemeral activity and set proper `world` permissions. This will automatically create an activity that any user can join, and will remove it when the last user leaves.  This is similar to how Convergence behaved prior to 1.0.0-rc.9.

```js
const options = {
  autoCreate: {
    ephemeral: true,
    worldPermissions: ["join", "view_state", "set_state"]
  }
};

domain.activities()
  .join("project", "myProject", options)
  .then((activity) => {
    // interact with the activity.
  });
```
