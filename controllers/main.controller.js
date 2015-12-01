'use strict';

angular.module('controllerApp')

.controller('mainCtrl', function(){
  var self = this;
  this.messageMain = "Welcome to the App";

  this.messageHome = "Hello Home Page";
  this.changed = "";

  this.handleMessage = function(message){
    self.messageHome = message;
  }

  this.messageAbout = "Hello About Page";
});
