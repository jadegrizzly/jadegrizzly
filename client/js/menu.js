Template.menu.events({
  'click .createdGame': function(evt, template) {
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
  }
});