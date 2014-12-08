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

});