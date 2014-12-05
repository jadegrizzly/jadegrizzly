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

// Router.onBeforeAction(function() {
//   if (! Meteor.userId()) {
//     this.render('login');
//   } else {
//     this.next();
//   }
// });