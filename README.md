hamster.js
==========

A standalone javascript library for cross-browser mouse wheel support.

The event callback receives 3 extra arguments which are the normalized “deltas” of the mouse wheel.

    Hamster(el).wheel(function(event, delta, deltaX, deltaY){
      console.log(delta, deltaX, deltaY);
    });

No jQuery or other libraries required, but an <a href="http://github.com/monospaced/hamster.js/blob/master/angular/angular-hamster.js">adaptor for AngularJS</a> is available.

Tested in these [core browsers](http://monospaced.github.com/obs).

See it in action
----------------

[monospaced.github.com/hamster.js](http://monospaced.github.com/hamster.js)

Reference
-----------

* [jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel)
* [wheel event on MDN](https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel)