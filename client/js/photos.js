Template.photos.helpers({
  photos: function() {
    console.log(Games.findOne(Session.get('currentGameId'), {'featList': {"photoURL" : 1}}));
    return Games.findOne(Session.get('currentGameId'));
  },
  gameName: function() {
    return Games.findOne(Session.get('currentGameId'));
  }
});

Template.photos.events({
  'click .navigate-events': function(evt, template) {
    Router.go('/game');
  },

  'click .go-back': function(evt, template) {
    Router.go('/game');
  },

  'click .logout': function(evt, template) {
    console.log('Logging user out...');
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
});