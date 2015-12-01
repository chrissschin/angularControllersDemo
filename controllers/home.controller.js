'use strict';

angular.module('controllerApp')

.controller('homeCtrl', function(API){
  var self = this;
  this.message = "Hello Home Page";
  this.changed = "";

  console.log(API.github + "users")

  this.handleMessage = function(message){
    self.message = message;
  }
});
