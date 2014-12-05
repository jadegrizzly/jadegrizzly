Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');

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

Meteor.call('playersUpsert', Meteor.userId(), 
            {$push:{ 'imageList': {image_url: '', game_name: '', event_name: ''}}});

console.log(Meteor.userId());


