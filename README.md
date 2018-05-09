Hamster.js
==========

A standalone javascript library for cross-browser mouse wheel support.

[See it in action](http://monospaced.github.io/hamster.js).

Usage
-----

The event callback receives 3 extra arguments which are the normalized “deltas” of the mouse wheel.

```js
var hamster = Hamster(el, false); // boolean is whether passive = true | false

hamster.wheel(function(event, delta, deltaX, deltaY){
  console.log(delta, deltaX, deltaY);
});

// destroy
hamster.unwheel();
```

Support
-------

The second parameter to Hamster() is optional, and indicates whether to mark the event listener as passive, for performance.  Please do your research about passive event listeners before turning this on.

No jQuery or other libraries are required, but an <a href="http://github.com/monospaced/angular-mousewheel">adapter for AngularJS</a> is available.

Tested in these [core browsers](http://monospaced.github.io/obs).

Install
-------

    npm install hamsterjs
    bower install hamsterjs

Demo
----

[monospaced.github.io/hamster.js](http://monospaced.github.io/hamster.js)

Reference
---------

* [jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel)
* [wheel event on MDN](https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel)
* [Passive Event Listeners by Google](https://developers.google.com/web/updates/2016/06/passive-event-listeners)
