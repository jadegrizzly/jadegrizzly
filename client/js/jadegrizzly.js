// Meteor.subscribe("usersData");
if (Meteor.isClient) {

  // Meteor.subscribe("usersData");

  Template.registerHelper("log", function(something) {
    console.log(something);
  });

  Template.userList.helpers({
    users: function() {
      return Meteor.users.find({}, {emails: 1});
    }
  });

}

