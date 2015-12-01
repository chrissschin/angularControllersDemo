'use strict';

angular.module('controllerApp')

.controller('aboutCtrl', function($routeParams, API){
  this.message = "Hello " + $routeParams.name;

  console.log(API.twitter + "repos")
});
