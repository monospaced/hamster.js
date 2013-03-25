var angularHamsterApp = angular.module('angularHamsterApp', ['hsWheelEvents']);

// Controllers

angularHamsterApp.controller('TestController', ['$scope', 'logMsg', function ($scope, logMsg) {
  'use strict';

  $scope.logs = [];

  $scope.test1 =  function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test1', delta, deltaX, deltaY);

    if (msg !== '') {
      $scope.logs.push(msg);
    }

    var pageX = event.pageX || event.originalEvent.pageX || event.originalEvent.clientX,
        pageY = event.pageY || event.originalEvent.pageY || event.originalEvent.clientX;

    $scope.logs.push('pageX: ' + pageX + ', pageY: ' + pageY);
  };

  $scope.test2 = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test2', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg);
    }

    event.preventDefault();
  };

  $scope.test3 = function() {
    $scope.logs.push('#test3: I should not have been logged');
  };

  $scope.test4a = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test4', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg);
    }

    event.preventDefault();
  };

  $scope.test4b = function() {
    $scope.logs.push('#test4: I should not have been logged');
  };

  $scope.test4c = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test2', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg + ' - 2nd handler');
    }

    event.preventDefault();
  };

  $scope.test5 = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test5', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg);
    }

    event.stopPropagation();
    event.preventDefault();
  };

  $scope.test6 = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test6', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg);
    }

    event.stopPropagation();
    event.preventDefault();
  };

  $scope.test7 = function(event, delta, deltaX, deltaY){
    var msg = logMsg.build('test7', delta, deltaX, deltaY);

    if(msg !== '') {
      $scope.logs.push(msg);
    }

    event.preventDefault();
  };

}]);

// Services

angularHamsterApp.service('logMsg', [function(){
  this.build = function(name, delta, deltaX, deltaY) {
    var o = '';

    if (delta > 0) {
      o = name + ': up ('+delta+')';
    } else if (delta < 0) {
      o = name + ': down ('+delta+')';
    }

    if (deltaX > 0) {
      o = o + ', east ('+deltaX+')';
    } else if (deltaX < 0) {
      o = o + ', west ('+deltaX+')';
    }

    if (deltaY > 0) {
      o = o + ', north ('+deltaY+')';
    } else if (deltaY < 0) {
      o = o + ', south ('+deltaY+')';
    }
    return o;
  };
}]);


// Directives

angularHamsterApp.directive('scrollDown', [function($parse){
  return function(scope, element) {
    element[0].parentNode.scrollTop = 999999;
  };
}]);

angularHamsterApp.directive('userAgent', [function(){
  return function(scope) {
    scope.ua = window.navigator.userAgent;
  };
}]);

