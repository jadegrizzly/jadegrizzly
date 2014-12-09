/**
 *  Helpers for Player Profile
 */

Template.profile.helpers({
  user: function() {
    return Meteor.user();
  },
  gameList: function() {
    return Games.find({"createdBy": Meteor.userId()});
  }
});

/**
 * Helpers for Each Game
 */

Template.profileGames.helpers({
  stringNotEmpty: function(string) {
    return string !== undefined ? true : false;
  }
});

Template.profileGames.events({
  'click a.profile-game-name': function(evt, template) {
    evt.preventDefault();
    var gameId = (Games.findOne({gameName: this.gameName}));

    Session.set('currentGameId', gameId._id);
    Router.go('/game');
  }
});