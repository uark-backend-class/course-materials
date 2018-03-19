# Execution Context

This is very similar to scope, simply the context of the code currently being executed.

There are two different types of execution context: Global, Function.

## Global Context

This is the highest level of scope that a variable or function can have, it's accessible to any other part of your code or application.

### Index.html

```html
<html>
  <head>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
<html>
```

This code is global because it is not inside a function. Putting this code is app.js globally attaches them to the global function.
```js
var myVar = 'I am a string';

function myFunc () {
  console.log('I am a function');
};
```

## Function Context

```js
function myFunc() {
  var myVar = 8;
  console.log('MY FUNC: ', myVar);
  myOtherFunc();
}

function myOtherFunc() {
  var myVar;
  console.log('MY OTHER FUNC: ', myVar);
}

var myVar = 3;
console.log('GLOBAL FIRST: ', myVar);
myFunc();
console.log('GLOBAL SECOND: ', myVar);
```

What happens when we remove the myVar declaration from myOtherFunc?

```js
function myFunc() {
  var myVar = 8;
  console.log('MY FUNC: ', myVar);
  myOtherFunc();
}

function myOtherFunc() {
  console.log('MY OTHER FUNC: ',myVar);
}

var myVar = 3;
console.log('GLOBAL FIRST: ', myVar);
myFunc();
console.log('GLOBAL SECOND: ', myVar);
```

## this and Objects
`this` is a special keyword in javascript that refers to the context of where a function is called. `this` is an object that contains properties that are present in the current context.

the context of the `this` keyword is based on where the function is called, not where it is declared. The order in which functions are called is also referred to as the call-stack.

The call-stack can be viewed in modern browser dev tools by inserting a `debugger;` break point in a function. In Chrome, the function call list is descending order.

An example of the call-stack:

```js
function foo () {
	bar();
  debugger;// call stack is Global >> foo() >> bar()
}

foo();		// call stack is Global >> foo()
```

There are 4 rules which determine what `this` will refer to when a function is executed.

The order in which the rules take precedence over each other when multiple apply are:

1. Constructor Binding
2. Explicit Binding
3. Implicit Binding
4. Default Binding

### Default Binding

If a function call occurs as an undecorated function reference, then `this` will refer to the global object. If the contents of the function are defined in `strict mode`, then `this` will be `undefined` and produce a TypeError.

```js
function foo () {
	this.bar = 'baz';
}

foo();
console.log(window.bar);	// 'baz'
```

### Implicit Binding

This rule specifies that if the function call-site has a context object, then this will refer to that object.

```js
function foo () {
	console.log(this.bar);
}

var baz = {
	bar: 'howdy',
	foo: foo
};

baz.foo();		// howdy
foo();			// undefined
```

It's important to note that in the snippet above, the first call to `foo()` is preceded by the `baz` reference object where `foo()` is a method. In this instance, `baz` is the containing / owning object and `this` will reference `baz`. `this.bar` could also be thought of as `baz.bar`.

### Explicit Binding

Explicit binding allows for forcing a function call to use a particular object for `this.` This can be done through the `call()` and `apply()` function methods.

For both of these methods, the first argument is an object to use for `this`. Consider:

#### Call and Apply

The apply() and call() methods call a function with a given this value, and arguments provided.

##### Simple Call
```js
function simpleCall() {
  console.log('Simple Call This:');
  console.log(this);
}

function strictCall() {
  'use strict';
  console.log('Strict Call This:');
  console.log(this);
}

simpleCall();
strictCall();
```

```js
'use strict';

var a = 5;
var b = 6;

function add(c, d) {
  return this.a + this.b + c + d;
}

console.log(add.call(this, 3, 4));
console.log(add.apply(this, [7, 8]));
```

```js
'use strict';

var a = 5;
var b = 6;

var myObj = {
  a: 11,
  b: 15
};

function add(c, d) {
  return this.a + this.b + c + d;
}

console.log(add.call(myObj, 3, 4));
console.log(add.apply(myObj, [5, 6]));
```

---


```js
function foo () {
	console.log(this.bar);
}

var baz = {
	bar: 'howdy'
}

foo.call(baz);
```

`foo.call` specifies that the `baz` object should be used for the `this` reference.

Passing `null` or `undefined` as a `this` parameter to `call`, `apply` or `bind` causes `this` to be ignored.

#### Bind

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
// syntax
function.bind(object);

// example
function foo (arg) {
	console.log(this.a, arg);
	return this.a + arg;
}

var obj = {
	a: 2
};

var bar = foo.bind(obj);

var b = bar(9);		// 2 9
console.log(b);		// 11

// simplified version of a bind method
function bind (fn, obj) {
	return function () {
		return fn.apply(obj, arguments);
	}
}
```

### Constructor Binding

The final rule concerns constructor calls of functions. When the `new` keyword is used to call a function, `this` is bound to the newly constructed object.

```js
function foo (bar) {
	this.bar = bar;
}

var baz = new foo('howdy');
console.log(baz.bar);		// howdy
```

```js
'use strict';

var myObject = {
  number: 4,
  getNumber: function() {
    return this.number;
  }
};

console.log(myObject.getNumber());
```

```js
'use strict';

var myObject = {
  number: 4,
};

function aNumberFunction () {
  return this.number;
}

myObject.getNumber = aNumberFunction;

console.log(myObject.getNumber());
```

```js
'use strict';

var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(person.getFullName());
```

```js
function car (color: string, numDoors: number) {
    this.color = color;
    this.numDoors = numDoors;
}

var myCar = new car('red', 'four');
var myNewCar = new car('blue', 2);
```
