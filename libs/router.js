Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  if (Meteor.user()) {
    Router.go('/menu');
  } else {
    this.render('index');
  }
});

Router.route('/menu', function(){
  this.render('menu');
});

Router.route('/create', function(){
  this.render('create');
});

Router.route('/game', function(){
  this.render('game');
});

Router.route('/photos', function(){
  this.render('photos');
});

Router.route('/search', function(){
  this.render('search');
});

Router.route('/profile', function(){
  this.render('profile');
});
