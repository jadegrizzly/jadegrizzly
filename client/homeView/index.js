/**
 * Setup Client Collections
 */

Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');
Feats = new Meteor.Collection('feats');
Images = new Meteor.Collection('images');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');

// This code is an attempt to move away from autopublish.
// originally it was:
// Meteor.subscribe('images');
Session.set('data_loaded', false);
Tracker.autorun(function() {  
  if (Session.get('query')) {
    Meteor.subscribe('images', function() {
      Session.set('data_loaded', true);
    });
  }
});


/**
 * Logs to Template
 */

Template.registerHelper('log', function(something) {
  console.log(something);
});

/**
 *  Accounts UI Config (Use USERNAME Strategy)
 */

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
