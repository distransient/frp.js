# Functional Reactive Programming concepts in Javascript

This repository goes over using some of the concepts of FRP in vanilla 
javascript. The goal is to find new ways to reason about your programs.

## Things used

There are some apis that are used in here that many developers may not be
familiar with, but they'll make working in this barebones approach quite a bit
easier.

### [Object.observe][] (ECMAScript 7)

Fresh off the experimental presses! This is part of the ES7 proposal and it's 
a cool one. pass it an object and a callback, and it'll run the callback
any time the object updates. Cooler yet, there's no polling; `Object.observe`
(when implemented natively) runs via "push", instead of "pull", and makes a
hook on each of the object's members internal setters to run your callback.
Also, it'll pass an array of the specific changes to that callback when an 
update happens (read the MDN docs above for more juicy details).

Browser support is essentially nonexistent, since the api is still subject
to change, and probably will be for another couple months. Chrome versions 44+
support the current ES7 proposal by enabling the "Enable Experimental 
JavaScript" option in `chrome://flags`. I'm currently using 
[ijdarling/Object observe][] as a polyfill in this repository.

### [Query Selector][] (Selectors API Level 1/2)

Think of `querySelector` as a built-in JQuery. You give it a css-selector
string and it returns an element (or NodeList, in the case of 
`querySelectorAll`) that you interact with just like any good ol' DOM
element. It's a method on `document`, and `Element`, and when binded to
(called as a method of) an Element, it will only query Elements that are
children of that node. Since the name is a bit long, you can do the following
to use the JQuery-style call syntax:

```js
var $ = document.querySelector.bind(document)

$('input[name="cool"]').value = 'nice!'
```

Browser support is all current browsers. You can assume it will work for anyone
except that one holdover family member you have that refuses to stop using
Internet Explorer 7 (or worse).

[Object observe]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
[Query Selector]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
[Arrow Functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

[jdarling/Object.observe]: https://github.com/jdarling/Object.observe
[thlorenz/es6ify]:         https://github.com/thlorenz/es6ify
