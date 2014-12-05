Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');

Template.createGame.helpers({
  createGame: function() {
    var gameObj = {
      createdBy: Meteor.userId(),
      participants: [Meteor.userId()]
    };

    Games.insert(gameObj, function(err, id) {
      Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    });
  },

  updateGameName: function(gameId, gameName) {
    Games.update(gameId, {$set: {gameName: gameName}});
  },

  addFeatItem: function(gameId, featItem) {
    Meteor.call('gamesUpsert', gameId, {$push:{featList: featItem}});
  }
});









