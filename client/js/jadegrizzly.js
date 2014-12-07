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
    var gameId = Session.get('currentGameId');
    return Games.findOne({_id: gameId});
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
    var input = template.find('.addEvents');
    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$push:{featList: input.value}});
    input.value = '';
  },

  'click .cancel-game': function(evt, template) {
    Router.go('/menu');
  },

  'click .go-back': function(evt, template) {
    Router.go('/menu');
  },

  'click .logout': function(evt, template) {
    console.log('Logging user out...');
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
});

