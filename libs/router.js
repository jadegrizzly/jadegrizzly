// set main template
Router.configure({
  layoutTemplate: 'layout'
});

// check if user is logged in
Router.route('/', function() {
  if (Meteor.user()) {
    Router.go('/menu');
  } else {
    this.render('index');
  }
});

// handle routing for each view
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

// default route for invalid URL
Router.route(/\S+/i, function() {
  Router.go('/');
});
