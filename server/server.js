/**
 * Create Collections
 */

Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');

/**
 * Authenticate Client For DB Access
 */

Players.allow({
  insert: function (userId, doc) {
    // can only create docs where you are the author
    return true;
  },
  remove: function (userId, doc) {
    // can only delete your own docs
    return true;
  },
  update: function(userId, doc) {
    return true;
  }
});

Games.allow({
  insert: function (userId, doc) {
    // can only create docs where you are the author
    return true;
  },
  remove: function (userId, doc) {
    // can only delete your own docs
    return true;
  },
  update: function(userId, doc) {
    return true;
  }
});


/**
 * Publish To Client
 */

Meteor.publish('players', function() {
  return Players.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
});

Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('feats', function() {
  return Games.find({}, {fields: {featList: 1}});
});

Games.remove({});

/**
 * Server Methods
 */

Meteor.methods({
  playersUpsert: function(id, doc) {
    Players.upsert(id, doc);
  }
});

Meteor.methods({
  gamesUpsert: function(id, doc) {
    Games.upsert(id, doc);
  }
});
