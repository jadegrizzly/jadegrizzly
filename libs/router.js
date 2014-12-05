Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  if (Meteor.user()) {
    Router.go('/menu');
  } else {
    this.render('home');
  }
});

Router.route('/menu', function(){
  this.render('menu');
});

Router.route('/create', function(){
  this.render('createGame');
});

Router.route('/game', function(){
  this.render('game');
});


Router.route('/photos', function(){
  this.render('photos');
});

Router.route('/current', function(){

  this.render('public_games');
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/home',
    template: 'home',
    layoutTemplate: 'layout',
    redirect: '/menu',
});
