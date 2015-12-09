'use strict';

angular.module('controllerApp', ['ngRoute', 'ngAnimate'])

.constant('API', {
  github: "http://api.github.com/",
  twitter: "http://api.twitter.com/",
})

.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl as home'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl as about'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl as home'
    })
    .otherwise({
        redirectTo : '/'
    })
});
