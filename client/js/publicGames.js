// Games = new Meteor.Collection('games');
Games = new Mongo.Collection(null);

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

[
  {
    gameName: 'SuperBowl',
    gameId: '355',
      },
  {
    gameName: 'SuperBowl',
    gameId: '360',
    
  },
  {
    gameName: 'Super Wedding',
    gameId: '361',
      },
  {
    gameName: 'Super Wedding',
    gameId: '356',
    
  },
  {
    gameName: 'Hangover time',
    gameId: '357',
      },
  {
    gameName: 'Hangover time',
    gameId: '362',
    
  },
  {
    gameName: 'Oh yeah!',
    gameId: '364',
      },
  {
    gameName: 'Oh yeah!',
    gameId: '358',
    
  },
  {
    gameName: 'Football',
    gameId: '100',
    
  },
  {
    gameName: 'Football',
    gameId: '108',
    
  },
  {
    gameName: 'Football VENT',
    gameId: '102',
    
  },
  {
    gameName: 'Football VENT',
    gameId: '106',
    
  },
  {
    gameName: 'Football WASTE',
    gameId: '105',
    
  },
  {
    gameName: 'Football WASTE',
    gameId: '107',
    
  },
  {
    gameName: 'AIR',
    gameId: '111',
     },
  {
    gameName: 'AMMONIA',
    gameId: '115',
    
  },
  {
    gameName: 'AMMONIA',
    gameId: '117',
    
  },
  {
    gameName: 'ARGON',
    gameId: '118',
      },
  {
    gameName: 'ASBESTOS FREE',
    gameId: '119',
     },
  {
    gameName: 'BOILER BLOW DOWN',
    gameId: '120',
      },
  {
    gameName: 'BOILER FEED WATER',
    gameId: '121',
      },
  {
    gameName: 'CARBON DIOXIDE',
    gameId: '122',
    
  },
  {
    gameName: 'CARBON DIOXIDE',
    gameId: '124',
    
  },
  {
    gameName: 'FREE FOOD',
    gameId: '42',
  },
  {
    gameName: '',
    gameId: '',
    }
].forEach(function (obj) {
  Games.insert(obj);
});