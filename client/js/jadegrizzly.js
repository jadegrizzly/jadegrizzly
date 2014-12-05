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

Template.create.helpers({
  feats: function() {
    return Feats.find();
  }
});

Template.create.events({
  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.addEvents').value;
    Feats.insert({
      name: value
    });
  }
});

