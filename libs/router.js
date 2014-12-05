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
  this.render('create');
});

Router.route('/game', function(){
  this.render('game');
});

Router.route('/photos', function(){
  this.render('photos');
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/home',
    template: 'home',
    layoutTemplate: 'layout',
    redirect: '/menu',
});