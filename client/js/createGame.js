Template.createGame.helpers({

  updateGameName: function(gameId, gameName) {
    Games.update(gameId, {$set: {gameName: gameName}});
  },

  addFeatItem: function(gameId, featItem) {
    Meteor.call('gamesUpsert', gameId, {$push:{featList: featItem}});
  }
});

