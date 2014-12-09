# Snapshot Olympics

> Organized photo scavenger hunts for friends, family and more.

## Team

  - __Product Owner__: Christian Perez
  - __Scrum Master__: Cory Asato
  - __Development Team Members__: Rene Polo, David Raleigh

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- meteor 1.0.x

## Development

### Installing Dependencies

From within the root directory:
```
curl https://install.meteor.com/ | sh
```

To launch the app from your terminal:
```
meteor
```

To simulate running on iOS:
```
meteor install-sdk ios
meteor add-platform ios
meteor run  ios
```
To run on an iOS device:
```
meteor run ios-device
```

For more info on iOS or Android installation, check [here](https://meteor.com/try/7)

Required packages are already installed. The full list can be found here:
```
.meteor/packages
```

### Database OverView
We used 4 different Mongo Collections 
The 'players' collection is accessed by the Players variable
The 'games' collection is accessed by the Games variable
The 'images' collection is accessed by the Images variable

Meteor provides a 'users' collection that comes with the accounts-ui package. It is accessed through calls to Meteor.user() and Meteor.userId()

We didn't use mongoose to define schemas for the project (I don't even know if it's possible), but in documenting the database we're going to imitate mongoose's layout for clairty:

var playerSchema = new Schema({
  _id:  String, /*assigned in code based off of the Meteor.userId(), for continuity*/
  gameList: [String, String, ...] /*mongoIds for games player is currently playing*/
});

var gameSchema = new Schema({
  _id:  String, /*dynamically created by mongo*/
  gameName:  String, /*non-unique game*/
  createdBy: String, /*Meteor.userId() of game creator */
  participants: [String, String, String,...], /*userIds. players participating in game*/
  featList:  [{name:String}, {name:String}, {name:String},... ] /*array of featName objects (this could be an array of featnames, without objects, but this design was left over from when featList contained more details)*/
});

var imagesSchema = new Schema({
  _id: String, /*dynamically created by mongo*/
  userId: String, /*Meteor.userId() of image creator*/
  username: String, /*Meteor.user().username*/
  gameId: String, /*mongoIds for game image is associated with*/
  featName: String, /*name associated with each feat from featList*/
  photoURL: ImageData, /*image data*/
  voteCount: Integer, /*increment or decrements as people vote on the photo*/
  downVotes: [String, String, String, ...], /*userIds. In order to keep people from downvoting twice, we maintained a list of people who had down voted the image*/
  upVotes: [String, String, String, ...], /*userIds. In order to keep people from upvoting twice, we maintained a list of people who had up voted the image*/
});



### Roadmap

View the project roadmap [here](https://github.com/jadegrizzly/jadegrizzly/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

<!--Waffle.IO Badge Code.  DO NOT EDIT-->
[![Stories in Ready](https://badge.waffle.io/jadegrizzly/jadegrizzly.png?label=ready&title=Ready)](http://waffle.io/jadegrizzly/jadegrizzly)
