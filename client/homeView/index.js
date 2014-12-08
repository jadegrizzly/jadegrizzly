/**
 * Setup Client Collections
 */

Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');
Feats = new Meteor.Collection('feats');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');

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





















