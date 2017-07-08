### Primitive Data Types

There are 6 primitive data types in JS:

- Undefined
- Null
- Boolean
- Number
- String

All primitive data types are immutable (cannot be changed).

#### Undefined Data Type

The Undefined data type has a single value: [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). When a variable is first declared, but not assigned a value it is assigned the value of undefined by default.

```js
var foo;

typeof foo;		// returns "undefined"
```
The Undefined type was added to ECMAScript to help differentiate between an empty object (`null`) and an uninitialized variable. It's best practice to NOT set variable values as undefined or use undefined as the name of a variable. It is also advisable to always initialize variables (i.e. assign a value); doing so helps to identify variables that have not been declared vs variable sthat have simply not been initialized.

#### Null Data Type

The Null data type also has a single value: [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null). The `null` value represents an empty object pointer. When finding the `typeof` a variable assigned the `null` value, it will return "object".

```js
var foo = null;

typeof null;	// returns "object"
```

It's considered best practice to define a variable that will later hold an object as null rather than `{ }`.

#### Boolean Data Type

The Boolean data Type has two literal values: `true` and `false`. It's important to note that these are not the same as the numeric values 1 and 0.

```js
1 === foo;	// returns false
```

Every data type in JavaScript can be converted into to a Boolean using the `Boolean()` casting function. The rules for the output vary by data type:

| Data Type		| Converts to True	| Converts to False	|
|:---------:	|:---------:		|:---------:		|
| Boolean		| `true` 			| `false`			|
| String	 	| Non-empty string 	| Empty String ("")	|
| Number 		| Non-zero number	| 0, NaN			|
| Object		| Any object		| null			 	|
| Undefined		| n/a				| undefined		 	|

This type of conversion allows for use of different data types within conditional statements.

```js
var foo = 'bar';		// setting foo to non-empty string

if (foo) {				// foo evaluates to true
	alert('Success!');
}
```

#### Number Data Type

The number data type supports both integers (literals) and [floating-point numbers](https://en.wikipedia.org/wiki/Floating_point). In addition, there are 3 special values: +Infinity, -Infinity and NaN (not-a-number).

```js
var intNum = 10;		// integer
var floatNum = 1.49; 	// floating-point
```

Floating-point numbers use up twice as much space as integers. If a number is defined without a number after the decimal, or is equal to ##.0, JavaScript will convert that number to an integer in an effort to save space.

```js
var floatNum = 1.;		// interpreted as integer 1
var floatNum2 = 9.0;	// interpreted as integer 9
```

The presence of floating-point numbers makes addition and verification of decimals rather difficult. Consider this example:

```js
var a = 0.1;
var b = 0.2;

((a + b) === 0.3);		// false
a + b;					// 0.30000000000000004
```

It is important to note that this is a result of the way arithmetic is handled in [IEEE-754 numbers](https://en.wikipedia.org/wiki/IEEE_floating_point), and isn't an issue or bug unique to ECMAScript. This issue exists within other languages that use the same number system.

Infinity is represented as any value greater than the value stored in the `Number.MAX_VALUE` property. Any result which returns positive or negative Infinity cannot be used in further calculations.

NaN (not-a-number) is used to represent the result of any calculation which has failed to return a valid number. This typically occurs when trying to divide 0 by 0. Dividing numbers with a value return the value of `Infinity` with the same sign as the number.

```js
0 / 0;		// returns NaN
10 / 0    // returns Infinity
-10  0    // returns -Infinity
```

The NaN value has a few unique properties:

- Any operation containing NaN will return NaN as a result (i.e `NaN / 3` will return `NaN`).
- NaN is not equal to any value (`NaN == NaN` returns `false`).

JavaScript provides a method to determine if a value is not a number: `isNaN()`. This method accepts a single argument of any data type, and will attempt to convert it to a number if it is not already. Any value that cannot be converted to a number will return a value of `true`.

```js
isNaN(NaN);		// true
isNaN(27);		// false - 27 is a number
isNaN('27');	// false - can be converted to 27
isNaN('foo');	// true - cannot be converted
isNaN(true);	// false - can be converted to 1
```

JavaScript has 3 important functions that can be used to convert nonnumeric values into numbers:

- Number()
- parseInt()
- parseFloat()

`Number()` can be used on any data type, while `parseInt()` and `parseFloat()` are used for strings exclusively. Each of these functions converts passed values in different ways.

`Number()` converts as follows:

- If Boolean, `true` gets converted to 1 and `false` gets converted to 0
- If number, the value passed to the function is returned
- If `null`, returns 0
- If `undefined`, returns `NaN`
- If string:
	- If string contains only numbers, value is converted to a number and returned (i.e. `'123'` would return `123`). The same is true for a floating point number (i.e. `'1.1'` returns `1.1`). Note that any leading zeroes will be removed.
	- If the string is empty (`''`), returns 0
	- If it contains a value other than any of the above, returns `NaN`
- If object:
	- `valueOf()` method is called and attempts to convert value into a number
	- If previous step is unsuccessful, `toString()` method is called and the rules for strings are applied

```js
var a = Number('foo');		// NaN
var b = Number('');			  // 0
var c = Number('0017');		// 17
var d = Number(true);		  // 1
```

Traditionally, the `parseInt()` method is a better option for integers. It performs the following operations:

- Leading white space is ignored
- If the first character of the string is not a number, `+` or `-` then `NaN` is returned. This is a more accurate representation than `Number()`, which would return a 0 in the same scenario.
- The conversion continues to parse the string until a non-numeric value is found. Any remaining non-numeric values are ignored. Similarly, decimal values are ignored.

```js
var a = parseInt('37red');		// 37
var b = parseInt('');			// NaN
var c = parseInt(37.9);			// 37
```

`parseFloat()` works similar to `parseInt()`, with the exception that the decimal is a valid character.

```js
var a = parseFloat('37red');	// 37
var b = parseFloat('37.9');		// 37.9
var c = parseFloat('31.3.4');	// 31.3
```

#### String Data Type

[The String data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) is used to store textual data. Text can be delineated using either single (`''`) or double (`""`) quotes. Note that the beginning and end of the string must use the same type of quote. There is no difference between the two types, as it is a matter of preference.

```js
var name1 = "Blake";
var name2 = 'Blake';
```

The string data type also contains several literals that can be used to represent commonly used characters:

| Literal	| Meaning			|
|:---------:|:---------:		|
| \n		| New line 			|
| \t		| Tab			 	|
| \b 		| Backspace			|
| \r		| Carriage return	|
| \\		| Backslash			|
| \'		| Single quote		|
| \"		| Double quote		|

It's important to note that strings are an immutable data structure. Once a string is created, the value cannot change unless the original string is destroyed and the variable is filled with a new string value.

Values can be a converted to a string value using the `toString()` method, which will return the string equivalent of the value.

```js
var age = 32;
var stringAge = age.toString();		// converts to "32"
```

The `toString()` method is available for strings, Booleans, objects and numbers.

If the value being converted could potentially be either `undefined` or `null`, then it's advised to use the `String()` casting function. This method will:

- If the value has a `toString()` method, it will be used and the default value will be returned
- If the value is `null`, 'null' is returned
- If the value is `undefined`, 'undefined' is returned

### Complex Data Types

There is a single complex data type in JavaScript: [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects). Technically Arrays are Objects, so it remains true that there is only a single complex data type. Objects are mutable (can be changed), and are a key component of JavaScript.

## Arrays

JavaScript arrays are lists of non-specific data, just like Objects. Indeed, a JavaScript array is a type of object. A new array can be created using the keyword `new` or using the array literal notation.

```js
var fruit = ['apple', 'orange', undefined, 5];
var cars = new Array();
```

*Array Element*

Elements in an array are referenced using bracket notation (similar to objects). Each value is assigned a number when added to the array -- this is known as the `index`. Arrays used a zero-based index, meaning that the first element has an index of `0`.

```js
var fruit = ['apple', 'orange', 'banana'];

console.log(fruit[0]);    // apple
console.log(fruit[1]);    // orange
console.log(fruit[2]);    // banana
```

Every instance of an Array has the following properties and methods via the Global Object:

- `length` - returns a count of the number of elements within the array
- [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - returns the index of the first matching element in the array
- [`isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) - returns true if value is an array
- [`pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - removes last element from array and returns that element
- [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - adds an element to the end of an array
- [`reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - reverses the order of elements in the array
- [`shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - removes the first element from the array and returns that element
- [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - sorts elements in an array
- [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - removes or adds elements to a specific spot in the array
- [`unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - adds elements to beginning of array and returns new length
- [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - concatenates elements in an array into a string

### Object Data Type

JavaScript objects are lists of non-specific data. Objects can be created via the constructor function using the keyword `new` or using the object literal notation. An object is a data structure which consists of properties and values. The value of a property can be a function (known as a method), or another data type (String, Array, Object, etc).

```js
var Person1 = new Object();		// constructor

var Person2 = {};				// object literal
```

Data within objects is stored as a series of key-value pairs. Functions within an object are referred to as methods.

```js
var person = {
	name: 'Blake',
	greet: function greet () {
		console.log('My name is ' + this.name + '.');
	}
}
```

*Object Properties*

Properties from within the object can be referenced using either dot notation or bracket notation.

Dot notation is considered best practice, but cannot be used in specific instances:

- The property name contains a number
- The property name is a number
- The property name contains special characters such as a hyphen or space
- The property name contains a variable

In the above cases, it's required to use bracket notation.

```js
obj.foo 		// valid
obj.7 			// invalid
obj.foo7 		// invalid
obj.foo-bar 	// invalid

obj[7] 			// valid
obj['foo7'] 	// valid
obj['foo-bar'] 	// valid

var foo = 'bar';
obj.bar = 'howdy';

obj[foo] 		// 'howdy'
```

Note that reserved keywords _should not_ be used as object properties.

*Adding Properties*

Adding properties to an object is as easy as calling the name of th new property using dot or bracket notation.

```js
var obj = {};

obj.foo = 1;
obj['bar'] = 2;

console.log(obj.foo);		// 1
console.log(obj.bar);		// 2
```

*Updating Properties*

Updating a property name can be done using the same method as property creation.

```js
var obj = {
	foo: 'bar'
};

obj.foo 				// bar
obj.foo = 'baz';

obj.foo 				// baz
```

*Removing Properties*

Properties can be removed from an object using the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator.

```js
delete object.property
delete object['property']

var obj = {
	foo: 1,
	bar: 2,
	baz: 3
};

delete obj.bar;
obj.bar 				// undefined
```

Every instance of an Object has the following properties and methods via the Global Object:

- [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - the function that is invoked to create an object.
- [`hasOwnProperty(propertyName)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) - indicates if the object has the provided property (not the prototype)
- [`isPrototypeOf(object)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) - determines if the object is a prototype of another object
- [`propertyIsEnumerable(propertyName)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) - indicates if the provided property can be iterated over using a `for-in` statement
- [`toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) - returns a string representation of the object that is appropriate for the locale of execution environment (i.e. the results are implementation dependent)
- [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) - returns a string representation of the object (the results are implementation independent)
- [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) - returns a string, number or Boolean equivalent of the object.

## Conditionals / Statements

[if-else](#if-else) | [switch]($switch) | [try-catch](#try-catch) | [throw](#throw) | [label](#label) | [break and continue](#break-and-continue)

Statements in JavaScript allow for certain events to occur based on a conditional test.

Note that the [`with` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) is considered a statement in JavaScript, but it is widely considered poor practice (and is not permitted at all using ES5's `use strict` syntax). Thus, it has been excluded from this section.

### if-else

[The `if` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) provides a result that should occur when certain conditions are met.

```
if (condition) statement1 else statement2
```

The condition does not have to be a Boolean, as JavaScript will automatically cast the condition as a Boolean using `Boolean()`.

If the condition is true, then statement1 is executed. If the condition evaluates to false, then statement2 is executed.

It's possible to not include a false statement, and to chain `if` statements if needed.

```js
var x = 2;

if (x < 4) {
	console.log('true');
} else {
	console.log('false');
}

// above statement would evaluate to true

var y = 5;

if (y < 4) {
	console.log('true');
} else {
	console.log('false');
}

// above statement would evaluate to false

var z = 10;

if (z < 10) {
	console.log('less than 10');
} else if (z > 10) {
	console.log('greater than 10')
} else {
	console.log('equal to 10')
}

// above would evaluate to 'equal to 10'
```

Note that it's possible to put the entire statement on a single line, and even forego the brackets. This is generally frowned upon.

```js
// valid, but not recommended:
if (true) { console.log('true'); }

// valid, but not recommended:
if (true)
	console.log('true');
else
	console.log('false');
```

### switch

[The `switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) is a close relative of the `if` statement. This statement allows specification of several types of input and each corresponding result.

```js
switch (expression) {
	case case_value: statement;
		break;
	case case_value: statement;
		break;
	case case_value: statement;
		break;
	default: statement;
		break;
}
```

If the evaluated expression is equal to one of the case_values, then the corresponding statement will be executed. The `break` keyword causes the code to exit the switch statement without further evaluation. This is required following each statement.

The `default` case value specifies what should happen when none of the previous case_values are provided as input.

```js
// example if statement
if (x === 25) {
	console.log('25');
} else if (x === 17) {
	console.log('17');
} else if (x === 9) {
	console.log('9');
} else {
	console.log('other value');
}

// equivalent switch statement
switch (x) {
	case 25:
		console.log('25');
		break;
	case 17:
		console.log('17');
		break;
	case 9:
		console.log('9');
		break;
	default:
		console.log('other value');
}
```

Note that it's not required for the case value to be a constant. Strings such as (`"first name" + " last name"` can be used in addition to constants). Additionally, it's important to realize that the comparison of the values uses the strict equal (`===`), so no type coercion occurs.

### try-catch

[The `try-catch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) in JavaScript is used for error handling and testing. It specifies a piece of code to try and a subsequent block that is executed if an exception is thrown.

```js
try {
	// potential error code
} catch (error) {
	// do this if error occurs
}
```

If an error occurs during the `try` block, execution immediately halts and the object containing the error is passed to the catch portion of the code. This error object varies by browser, but at a minimum contains a `name` specifying the type of error and a `message` that contains the actual error message.

```js
try {
	foo();
} catch (error) {
	alert(error.message);
}
```

It's also possible to include a `finally` clause at the end of a `try-catch` statement. The `finally` clause will always be executed, both if an error is thrown and if it is not thrown. This can be used in conjuction with a `catch` block, or without it.

```js
try {
	// potential error code
} catch (error) {
	// do this if error occurs
} finally {
	// do this no matter what
}
```

It's important to note that if a `finally` clause is included, any `return` statements as part of the `try` or `catch` blocks will be ignored.

### throw

[The `throw` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) throws a user-defined exception. Any statements which occur after the `throw` statement is executed will not be executed. This is most typically used with error-handling.

If a catch block exists within the call stack, control will be passed to that block. If no catch block is present, the program will terminate.

```js
// syntax
throw exception

// example
if (err) {
	throw new Error('Error message here');
}
```

## Loops

[for](#for) | [for-in](#for-in) | [#do-while](#do-while) | [while](#while)

[Loops offer a way to easily iterate over data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration), or perform the same task repeatedly.

### for

The most common type of loop in JavaScript is the [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement). The for loop will continue to run until a specified condition evaluates to false.

```
for (initialization; condition; post-loop-expression) statement
```

When the for loop is executed:

- The initialization expression is executed. This is typically initialization of a counter variable like `i` or `count` or `counter`.
- Next, the condition expression is evaluated. If the condition is true, the loop statement will continue. If the condition is false, then the `for` loop terminates. Note that if a condition expression is not provided, then it is interpreted as true.
- The statement executes.
- If the conditional statement was true prior to the execution of the statement, then the post-loop-expression will be executed after the statement. This is typically used o increment the counter variable in some way (i.e. `i++` or `count--`).

```js
for (var i = 1; i < 4; i++) {
	console.log(i);
}
```

The above code will log 1, 2, 3 to the console. It's important to note that everything that can be done with a `for` loop can also be done with a `while` loop.

```js
var fruits = ['apple', 'orange', 'banana'];

for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// apple
// orange
// banana
```

Above is an example using a `for` loop to iterate over an array and return the values within.

### for-in

[The `for-in` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement) is used to iterate over the enumerable properties in an object.

```js
for (property in object) {
	// do this
}
```

Note that the standard `for` loop should be used to iterate over arrays. It's possible to use `for-in`, but it will return both the user-defined properties and the numeric indices.

```js
var apple = {
	'color': 'red',
	'type': 'Pink Lady',
	'size': 'Medium'
};

for (properties in apple) {
	console.log(properties);
}

// color
// type
// size
```

It's important to realize that the order in which the properties are returned may vary depending on the browser.

### while

[The `while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement) will execute its statements as long as the specified condition evaluates to true. Similar to the `for` loop, the escape condition is tested before the loop is executed.

```
while (expression) statement
```

```js
var i = 1;
while (i < 4) {
	console.log(i);
	i++;
}
```

Similar to the `for` loop example, this will log 1, 2, 3 to the console before exiting.

### do-while

[The `do-while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement) allows a statement to repeat until a specified condition evaluates to false. The code within the `do` block of the code will _always_ execute once prior to checking if the condition is met.

```js
var i = 1;

do {
	console.log('do statement executes')
	i++;
} while (i < 1);


// the for statement will not log anything to the console
for (var count = 1; count < 1; count++) {
	console.log('for statement executes');
}

// do statement executes
```

In the example above, the `do-while` statement logs to the console once even though the condition specified is already met. Alternatively, the `for` loop does not log anything to the console.
