/**
 * Create Game Helpers
 */

Template.create.helpers({
  feats: function() {
    var gameId = Session.get('currentGameId');
    return Games.findOne({_id: gameId});
  }
});

Template.create.events({
  'submit form.new-game': function(evt, template) {
    evt.preventDefault();

    var value = template.find('.gameName').value;

    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$set: {gameName: value}});
  },

  'submit form.new-event': function(evt, template) {
    evt.preventDefault();

    var input = template.find('.addEvents');
    var featName = input.value.trim();
    var featNameCheck = Games.findOne({_id:Session.get('currentGameId'), "featList.name":featName});
    if (!featNameCheck) {
      Meteor.call('gamesUpsert', Session.get('currentGameId'), {$push:{featList: {name: featName}}});
      console.log('game event created');
    } else {
      // TODO add relevant message that feat already exists
      console.log('game event already exists');
    }
    
    input.value = '';
  },

  'click .cancel-game': function(evt, template) {
    // TODO delete game from database ?
    Router.go('/menu');
  },

  'click .create-game': function(evt, template) {
    var value = template.find('.gameName').value;
    // TODO : This isn't checking the database to see that the game doesn't already
    // have a name and the field was accidentally cleared. Just assumes that if the 
    // field is empty the name never was defined.
    if (!value || value.length === 0) {
      console.log('game not started');
      // TODO present a message to user to define game name
      return;
    }

    // TODO Prevent player from making a game with the same name twice
    // userId + gameName should be a unique key:

    console.log('game started');
    Meteor.call('gamesUpsert', Session.get('currentGameId'), {$set: {gameName: value}});

    Router.go('/game');
  }
});

/**
 * Removes event / feat from View.
 */

Template.userEvent.events({
  'click .remove': function(evt, template) {
    Games.update(Session.get('currentGameId'), {$pull: {featList: {name: this.name}}});
  }
});
