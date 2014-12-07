Template.game.helpers({
  newGame: function() {
    return Games.findOne(Session.get('currentGameId'));
  },

  events: function() {
    var q = Games.findOne(Session.get('currentGameId'));
    return q.featList;
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
  },
  'click .navigate-photos': function(evt, template){
    Router.go('/photos');
  },
  'click .navigate-events': function(evt, template){
    Router.go('/game');
  }
});

/**
 * List item events.
 */
Session.setDefault('imageExists', false);

Template.gameEvent.helpers({
  checker: function() {
    return Session.get('checked');
  },
  imageExists: function() {
    return Session.get('imageExists');
  }
});

Template.gameEvent.events({
  'click a.event-name': function (evt, template) {
    var cameraOptions = {
      width: 800,
      height: 600
    };

    var featName = this.name;
    var span = template.find('.check');

    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      if(error) { console.log(error); }
      // INSERT URL TO DB
      Session.set('eventImage', data);
      var gameId = Session.get('currentGameId');
      var userId = Meteor.userId();      
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName }, {$push: {"featList.$.competedBy" : {"playerId":userId, "photoURL":data}}});
      span.setAttribute('class', 'checked glyphicon glyphicon-ok');
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
});
