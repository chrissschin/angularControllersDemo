'use strict';

angular.module('controllerApp')

.controller('aboutCtrl', function($routeParams, API){
  // if passing name in routeParams
  // this.message = "Hello " + $routeParams.name;
  this.message = "Hello World"

  console.log(API.twitter + "repos")
});
