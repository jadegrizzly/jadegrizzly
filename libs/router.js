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

<<<<<<< HEAD
Router.route('/photos', function(){
  this.render('photos');
});

AccountsTemplates.configureRoute('signIn');
=======
Accounts.onLogin(function(){
  console.log('Login success');
  Router.render('menu');
});



Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('layout');
  } else {
    this.next();
  }
});
>>>>>>> working on sessions

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/home',
    template: 'home',
    layoutTemplate: 'layout',
    redirect: '/menu',
});
