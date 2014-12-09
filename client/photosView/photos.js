Template.photos.helpers({
  photos: function() {
    var cursor =  Images.find({gameId: Session.get('currentGameId')});//gameId: Session.get('currentGameId')
    return cursor;
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

var hasUpVoted = function(voterId, photoId)
{
  var query = {'_id':photoId, 'upVotes': { $in: [ voterId ] } };
  var voteCheck = Images.findOne(query);
  return !(voteCheck === undefined);
}

var hasDownVoted = function(voterId, photoId)
{
  var query = {'_id':photoId, 'downVotes': { $in: [ voterId ] } };
  var voteCheck = Images.findOne(query);
  return !(voteCheck === undefined);            
}

// TODO consolidate code
// var hasVoted = function(gameId, featName, userId, playerId, voteType) {
// };

Template.snapshots.events({
  'click div.upvote': function(evt, template) {
    var userId = Meteor.userId();
    
    var upVoteCheck = hasUpVoted(userId, this._id);
    var downVoteCheck = hasDownVoted(userId, this._id);
    if (downVoteCheck) {
      Meteor.call('imagesUpsert', this._id, {$inc: {'voteCount': 1}});
      Meteor.call('imagesUpsert', this._id, {$pull: {'downVotes': userId}});
      console.log('removed downvote');
    } else if (!upVoteCheck) {
      console.log('upVoted');
      Meteor.call('imagesUpsert', this._id, {$inc: {'voteCount': 1}});
      Meteor.call('imagesUpsert', this._id, {$push: {'upVotes': userId}});
    }
    else {
      console.log('prevented upvote');
    }
  },

  'click div.downvote': function(evt, template) {
    var userId = Meteor.userId();
    
    var upVoteCheck = hasUpVoted(userId, this._id);
    var downVoteCheck = hasDownVoted(userId, this._id);
    if (upVoteCheck) {
      Meteor.call('imagesUpsert', this._id, {$inc: {'voteCount': -1}});
      Meteor.call('imagesUpsert', this._id, {$pull: {'upVotes': userId}});
      console.log('removed downvote');
    } else if (!downVoteCheck) {
      console.log('downvoted');
      Meteor.call('imagesUpsert', this._id, {$inc: {'voteCount': -1}});
      Meteor.call('imagesUpsert', this._id, {$push: {'downVotes': userId}});
    }
    else {
      console.log('prevented upvote');
    }    
  }
});
