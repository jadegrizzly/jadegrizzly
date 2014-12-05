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

// Meteor.call('playersUpsert', Meteor.userId(), 
//             {$push:{ 'imageList': {image_url: '', game_name: '', event_name: ''}}});

/**
 * Game Helpers
 */

// Template.createGame.helpers = function() {
//   return Session.get('edit-' + this._id);
// };

// Session.set('feats', ['test']);
Games.insert({
  featList: [{'feat': 'test1'},{'feat': 'test2'}]
});

Template.createGame.helpers({
  feats: function() {
    return Games.find({}, {});
  }
});

Template.createGame.events({
  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.add-events').value;
    console.log(value);

    Session.set('feats', [value]);

  }
});

