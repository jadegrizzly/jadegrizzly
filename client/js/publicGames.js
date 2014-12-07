
Template.publicGames.helpers({
  settings: {
    position: 'top',
    limit: 10,
    rules: [
      {
        // token: '',
        collection: Games,
        field: 'gameName',
        matchAll: true,
        template: Template.games
      }
    ]
  },
  gameNames: function() {
    return Games.find();
  }
});

Template.publicGames.events({
  'click .go-back': function(evt, template){
    Router.go('/menu');
  }
});