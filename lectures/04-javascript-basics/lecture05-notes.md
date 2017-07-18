# JavaScript Scope

Scope is the set of rules defined around variable creation, storage and usage. This set of rules determines where the variables are stored, how long they are stored for and when said variables are available for use.

JavaScript employs lexical scoping -- variables and function scope are dependent upon where they are declared. Any function or variable that is defined outside of a function is added to the `global` (i.e. `window` in browsers) scope.

Variables and functions defined within functions are bound to the scope of the outer function. These variables and functions have access to outer variables and functions through the scope chain. Similar to the prototype chain, the compiler will continue to examine scope outside of the local variable scope until it finds a match. If no match is found, a `ReferenceError` is thrown.

```js
var a = 7;

function foo () {
	console.log(a);
}

foo();		// 7
```

In the above snippet, the `console.log` statement has access to the globally defined `a`. Consider:

```js
var a = 7;

function foo () {
	var b = 8;

	function bar () {
		console.log(a + b);
	}

	bar();
}

foo();				// 15
console.log(b);		// ReferenceError
```

In this snippet, `bar()` has access to both `a` and `b`. However, outside of `foo()`, `b` does not exist and cannot be used.
