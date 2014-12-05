// Template.main.helpers({  
//   createGame: function() {
//     var gameObj = {
//       createdBy: Meteor.userId(),
//       participants: [Meteor.userId()]
//     };

//     Games.insert(gameObj, function(err, id) {
//       Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
//     });
//   }
// });

Template.main.events({
  'click .createdGame': function(evt, template) {
    var gameObj = {
      createdBy: Meteor.userId(),
      participants: [Meteor.userId()]
    };

    Games.insert(gameObj, function(err, id) {
      Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    });
  }
});



// Template.signup.events({
//   'click button': function(evt, template) {
//     evt.preventDefault();

//     User.createUser({
//       username: template.find('#su-username').value,
//       password: template.find('#su-password').value
//     });
//   }
// });