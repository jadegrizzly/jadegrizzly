Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/menu', function(){
  this.render('menu');
});

Router.route('/create', function(){
  this.render('create');
});

// Accounts.onLogin(function(){
//   console.log('Login success');
//   Router.render('menu');
// });
// 
// Router.onBeforeAction(function() {
//   if (! Meteor.userId()) {
//     this.render('layout');
//   } else {
//     this.next();
//   }
// });

// Tracker.autorun(function() {
//   if (Router.current().route.name === 'home' && Meteor.user() !== null)
//     Router.go('menu');
// });