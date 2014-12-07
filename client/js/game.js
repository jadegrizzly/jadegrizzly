Template.game.events({
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
