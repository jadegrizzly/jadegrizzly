/**
 * Create Collections
 */

Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');

/**
 * Authenticate Client For DB Access
 */

Players.allow({
  insert: function (userId, post) {
    // can only create posts where you are the author
    return true;
  },
  remove: function (userId, post) {
    // can only delete your own posts
    return true;
  },
  // since there is no update field, all updates
  // are automatically denied
  update: function(userId, post) {
    return true;
  }
});

Games.allow({
  insert: function (userId, post) {
    // can only create posts where you are the author
    return true;
  },
  remove: function (userId, post) {
    // can only delete your own posts
    return true;
  },
  // since there is no update field, all updates
  // are automatically denied
  update: function(userId, post) {
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
  return Meteor.find();
});

/**
 * Server Methods
 */

Meteor.methods({
  playersUpsert: function(id, doc) {
    Players.upsert(id, doc);
  }
});
