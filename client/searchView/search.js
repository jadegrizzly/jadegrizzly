/**
 * Search List Helpers 
 */

Template.search.helpers({
  settings: {
    position: 'top',
    limit: 10,
    rules: [
      {
        collection: Games,
        field: 'gameName',
        matchAll: true,
        template: Template.games
      }
    ]
  }
});

Template.search.events({
  'submit form.gameSearch': function(evt, template) {
    evt.preventDefault();
    var gameName = template.find('.searchingGame').value;
    var gameId = Games.findOne({gameName: gameName});

    Session.set('currentGameId', gameId._id);

    // TODO check if the player is already a participant in this game, if they're not
    // then push their name into the participants array, similar to below
    // Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    
    Router.go('/game');
  }
});

/**
 * Search Game Helpers
 */

Template.games.helpers({
  ownerLabelClass: function() {
    var player = Meteor.users.findOne(this.createdBy);
    return player.username;
  }
});