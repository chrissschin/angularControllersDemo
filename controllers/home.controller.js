'use strict';

angular.module('controllerApp')

.controller('homeCtrl', function(API){
  var self = this;
  this.message = "Hello Home Page";
  this.changed = "";
  this.cool = "";
  this.yea = "";
  this.awesome = "";

  this.madLibForm = true;

  this.madLib = function() {
    self.madLibForm = false;
  }

  this.madReset = function() {
    // empty the models
    self.changed = "";
    self.cool = "";
    self.yea = "";
    self.awesome = "";

    // hide the madlib
    self.madLibForm = true;

    // finally clean the form
    self.mainForm.$setPristine();
  }

  console.log(API.github + "users")

  this.handleMessage = function(message){
    self.message = message;
  }
});
