Hamster.js
==========

A standalone javascript library for cross-browser mouse wheel support.

[See it in action](http://monospaced.github.io/hamster.js).

Usage
-----

The event callback receives 3 extra arguments which are the normalized “deltas” of the mouse wheel.

```js
var hamster = Hamster(el);

hamster.wheel(function(event, delta, deltaX, deltaY){
  console.log(delta, deltaX, deltaY);
});

// destroy
hamster.unwheel();
```

Support
-------

No jQuery or other libraries required, but an <a href="http://github.com/monospaced/angular-mousewheel">adapter for AngularJS</a> is available.

Tested in these [core browsers](http://monospaced.github.io/obs).

Install
-------

```sh
$ yarn add hamsterjs
```

Demo
----

[monospaced.github.io/hamster.js](http://monospaced.github.io/hamster.js)

Reference
---------

* [jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel)
* [wheel event on MDN](https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel)
