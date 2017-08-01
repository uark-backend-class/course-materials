# JavaScript Scope & Closures

[Strict Mode](#strict-mode) | [Hoisting](#hoisting) | [Closures](#closures)

### Strict Mode

This will work just fine in the sense that it won't throw an error. Hard to debug logic issues may arise as a result of the value of person not being appropriately set but we think we've done it correctly. Now an error will be thrown where we would otherwise accidentally create a new global variable.
```js
let person;

// this is a typo where we try to set person equal to some value
persom = {name: 'Joe'};

// logging both to show what happens to the variables person and persom in our situation where we simulate a typo error
console.log(person);
console.log(persom);
```

Here, we specify to only use strict inside the logNewPerson function. The error that is thrown throws on the line where we try to use otherPersom instead of the line where we try to use persom. ES5 allows `use strict` to be declared inside any function, ES6 limits its use to only functions with simple parameters.
```js
let person;
persom = {name: 'Joe'};

console.log('GLOBAL:');
console.log(person);
console.log(persom);

function logNewPerson() {
  'use strict';

  let otherPerson;
  otherPersom = {name: 'Jane'};
  console.log('FUNCTION:');
  console.log(otherPerson);
  console.log(otherPersom);
}

logNewPerson();
```

```js
function sum(a, a, c) {
  return a + a + c;
}

console.log(sum(1, 2, 3));
```

```js
function sum(a, a, c) {
  'use strict';
  return a + a + c;
}

console.log(sum(1, 2, 3));
```

```js
'use strict';

var person;

persom = {name: 'Joe'};

console.log(person);
console.log(persom);
```

### Hoisting

A nuance of variable declaration occurs through what's known as 'hoisting'. Variables and function declarations are captured first by the compiler. This gives the illusion that they are 'pushed to the top', or 'hoisted'. Assignment by the compiler occurs after declaration.

For example, `var a = 7;` is read by the JS engine as `var a;` followed by `a = 7;`. Additionally, function declarations (`function exampleFunction () { ... }`) are hoisted, but function expressions (`var exampleFunction = function () { ... }`) are not hoisted. If there is a conflict between a hoisted function and a variable, the function takes precedence.

Note that function declarations should not be done within blocks. The behavior is unreliable and frowned upon.

### Closures

A closure is when a function remembers the scope in which it was defined, even if the function is being executed outside its original scope.

```js
function globalFunction() {
	const a = 7;

	function innerFunction() {
		console.log(a);
	}

	return innerFunction;
}

const assignedFunction = globalFunction();

assignedFunction();		// 7
```

In the above code, because `innerFunction` is returned within the `globalFunction()` function, and `globalFunction()` is instantiated and captured within the `assignedFunction` variable, the compiler will remember the scope in which `innerFunction` was created.

Another example:

```js
let variableFunction;

function firstGlobalFunction () {
	const a = 7;

	function innerFunction() {
		console.log(a);
	}

	variableFunction = innerFunction;
}

function secondGlobalFunction () {
	variableFunction();
}

firstGlobalFunction();

secondGlobalFunction();		// 7
```

The context of `innerFunction()` is passed to the global `variableFunction` variables. The `innerFunction` function has a closure around the scope of the `firstGlobalFunction()` function, and thus the value of `7` is logged to the console when `secondGlobalFunction()` is called.
