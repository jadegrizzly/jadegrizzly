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

<<<<<<< HEAD
Template.createGame.helpers({
  feats: function() {
    console.log(Feats.find());
    return Feats.find();
=======
Games.insert({
  featList: [{'name': 'test1'},{'name': 'test2'}]
});

Template.createGame.helpers({
  feats: function() {
    return Feats.find().fetch();
>>>>>>> ca97f31cb7a652f9f9b4b5db29be465818457f5f
  }
});

Template.createGame.events({
<<<<<<< HEAD
  'submit form.new-game': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.gameName').value;

    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$set: {gameName: value}});
  },

  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.addEvents').value;

    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$push:{featList: value}});
=======
  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.add-events').value;
    console.log(value);

    Session.set('feats', [value]);

>>>>>>> ca97f31cb7a652f9f9b4b5db29be465818457f5f
  }
});

