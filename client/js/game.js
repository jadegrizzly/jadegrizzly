Template.game.helpers({
  newGame: function() {
    return Games.findOne(Session.get('currentGameId'));
  },

  events: function() {
    var q = Games.findOne(Session.get('currentGameId'));
    return q.featList;
  }
});

Template.gameEvent.events({
  'click a.event-name': function () {
    var cameraOptions = {
      width: 800,
      height: 600
    };

    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      if(error) { console.log(error); }
      // INSERT URL TO DB
      Session.set('eventImage', data);
      //Meteor.call('gamesUpsert', Session.get('currentGameId'), {$push:{featList: {url: input.value}}});
    });
  }
});

Template.game.events({
  'click .go-back': function(evt, template){
    Router.go('/create');
  },

  'click .logout': function(evt, template){
    console.log('Logging user out...');
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
})
