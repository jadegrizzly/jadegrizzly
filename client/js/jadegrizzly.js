Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');
Feats = new Meteor.Collection('feats');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');
Meteor.subscribe('feats');

Template.registerHelper('log', function(something) {
  console.log(something);
});

Template.userList.helpers({
  allUsers: function() {
    return Meteor.users.find().fetch();
  }
});

Template.userList.helpers({
  user: function() {
    return Meteor.users.find();
  }
});

// Meteor.call('playersUpsert', Meteor.userId(), 
//             {$push:{ 'imageList': {image_url: '', game_name: '', event_name: ''}}});

/**
 * Game Helpers
 */

Template.createGame.helpers({
  feats: function() {
    console.log(Feats.find());
    return Feats.find();
  }
});

Template.createGame.events({
  'submit form.new-game': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.gameName').value;

    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$set: {gameName: value}});
  },

  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.addEvents').value;

    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$push:{featList: value}});
  }
});

