Template.menu.events({
  'click .createdGame': function(evt, template) {
    var gameObj = {
      createdBy: Meteor.userId(),
      participants: [Meteor.userId()]
    };

    Games.insert(gameObj, function(err, id) {
      Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    });
  }
});