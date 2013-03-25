/*
 * Angular Hamster
 *
 * Within an Angular.js application,
 * allows you to specify custom behaviour on Hamster.js mouse wheel events.
 *
 * Usage, currently as attribute only:
 *
 *    hs-wheel="{expression}"
 *
 * Include this file, and add `hsWheelEvents` to your app's dependencies.
 *
 * Requires Hamster.js
 * https://github.com/monospaced/hamster.js
 *
 */

var hsWheelEvents = angular.module('hsWheelEvents', []);

hsWheelEvents.directive('hsWheel', ['$parse', function($parse){
  return function(scope, element, attr) {
    var fn = $parse(attr['hsWheel']),
        elm = element[0],
        ngElm = angular.element(elm),
        hamster = ngElm.data('hamster');
    if (!hamster) {
      hamster = Hamster(elm);
      ngElm.data('hamster', hamster);
    }
    hamster.wheel(function(event, delta, deltaX, deltaY){
      scope.$apply(function() {
        fn(scope, {
          $event: event,
          $delta: delta,
          $deltaX: deltaX,
          $deltaY: deltaY
        });
      });
    });
  };
}]);
