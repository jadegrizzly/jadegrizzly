Template.photos.helpers({
  photos: function() {
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

Template.snapshots.events({
  'click div.upvote': function(evt, template) {
    var gameId = Session.get('currentGameId');
    var featName = this.featName;
    console.log(this.featName);
    console.log(this.userId);
    Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {"featList.$.completedBy.0.voteCount": 1}});
  },

  'click div.downvote': function(evt, template) {
    var gameId = Session.get('currentGameId');
    var featName = this.featName;

    Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {"featList.$.completedBy.0.voteCount": -1}});
  }
});
