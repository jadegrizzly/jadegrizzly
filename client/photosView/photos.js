Template.photos.helpers({
  photos: function() {
    return Games.findOne(Session.get('currentGameId'));
  },
  gameName: function() {
    return Games.findOne(Session.get('currentGameId'));
  }
});

Template.photos.events({
  'click .navigate-events': function(evt, template) {
    Router.go('/game');
  },

  'click .go-back': function(evt, template) {
    Router.go('/game');
  },

  'click .logout': function(evt, template) {
    console.log('Logging user out...');
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
});

var hasUpVoted = function(gameId, featName, userId, playerId)
{
  var query = {
            '_id':gameId, 
            'featList.completedBy': {
              $elemMatch: {
                featName:featName, 
                'playerId':playerId, 
                'upVotes': {
                  $in: [
                    Meteor.userId()
                  ]
                }
              }
            }
          };
  var voteCheck = Games.findOne(query);
  return !(voteCheck === undefined);
}

var hasDownVoted = function(gameId, featName, userId, playerId)
{
    var query = {
                '_id':gameId, 
                'featList.completedBy': {
                  $elemMatch: {
                    featName:featName, 
                    'playerId':playerId, 
                    'downVotes': {
                      $in: [
                        Meteor.userId()
                      ]
                    }
                  }
                }
              };
  var voteCheck = Games.findOne(query);
  return !(voteCheck === undefined);            
}

// TODO consolidate code
// var hasVoted = function(gameId, featName, userId, playerId, voteType) {
// };

Template.snapshots.events({
  'click div.upvote': function(evt, template) {
    var gameId = Session.get('currentGameId');
    var featName = this.featName;
    var userId = Meteor.userId();
    var playerId = this.playerId;
    
    var upVoteCheck = hasUpVoted(gameId, featName, userId, playerId);
    var downVoteCheck = hasDownVoted(gameId, featName, userId, playerId);
    if (downVoteCheck) {
      console.log('removed downvote');
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {'featList.$.completedBy.0.voteCount': 1}});
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$pull: {'featList.$.completedBy.0.downVotes': userId}});
    }
    else if (!upVoteCheck) {
      console.log('upVoted');
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {'featList.$.completedBy.0.voteCount': 1}});
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$push: {'featList.$.completedBy.0.upVotes': userId}});
    }
    else {
      console.log('prevented upvote');
    }
  },

  'click div.downvote': function(evt, template) {
    var gameId = Session.get('currentGameId');
    var featName = this.featName;
    var userId = Meteor.userId();
    var playerId = this.playerId;
    
    var upVoteCheck = hasUpVoted(gameId, featName, userId, playerId);
    var downVoteCheck = hasDownVoted(gameId, featName, userId, playerId);
    if (upVoteCheck) {
      console.log('removed upvote');
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {'featList.$.completedBy.0.voteCount': -1}});
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$pull: {'featList.$.completedBy.0.upVotes': userId}});
    }
    else if (!downVoteCheck) {
      console.log('downVoted');
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$inc: {'featList.$.completedBy.0.voteCount': -1}});
      Meteor.call('featListUpdate', {_id: gameId, 'featList.name': featName, 'featList.completedBy.featName': featName}, {$push: {'featList.$.completedBy.0.downVotes': userId}});
    }
    else {
      console.log('prevented downvote');
    }
  }
});
