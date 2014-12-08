/**
 * Dropdown Menu Helpers
 */

Template.dropdown.events({
  'click a.createGame': function(evt, template) {
    var gameObj = {
      createdBy: Meteor.userId(),
      participants: [Meteor.userId()]
    };
    
    Games.insert(gameObj, function(err, id) {
      // update current game Session id
      Session.set('currentGameId', id);

      // update player's game list with game they created
      Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    });
  },

  'click .logging-out': function(evt, template) {
    console.log('Logging user out...');
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
});
