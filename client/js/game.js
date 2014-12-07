Template.game.helpers({
  newGame: function() {
    console.log(Games.findOne(Session.get('currentGameId'), {"gameName": 1}));
    return Games.findOne(Session.get('currentGameId'), {"gameName": 1});
  }
});