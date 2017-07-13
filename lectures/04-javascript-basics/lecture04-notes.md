# Functions
---
## Creating A Function

### Components of a Function
- Name
- Parameters (up to 255)
- Statements

### Defining a Function
- Function Declaration
- Function Expression
- Function Constructor

#### Declaration
```js
function greeting (message) {
    console.log(message);
}
```
#### Expression
```js
let greeting = function greetingFunction(message) {
   console.log(message);
};
```
The name of the variable you assign the function to and the name of the function itself are unrelated.

#### Constructor
```js
let greeting = new Function('message', 'console.log(message);');
```
Note: The function constructor is not recommended. You have to pass the function body in to the constructor as a string which can cause problems with some javascript engines. It is also difficult to format large function bodies.

#### Arrow Function Expression
```js
let greeting = (messageOne, messageTwo) => {console.log(messageOne, messageTwo)}
```
OR
```js
let greeting = message => console.log(message)
```

When using a single parameter and single statement, the `()` and `{}` brackets are not required.

Arrow functions are more compact and in some cases easier to read that other functions. However there are still use cases for the other function definitions, as arrow functions have different behavior in some cases.

---
## Invoking a Function
Now that we've defined our function, how do we use it? Consider the following two snippets

```js
function greeting (message) {
   console.log(message);
};
```
AND
```js
function greeting (message) {
   console.log(message);
};

greeting('hello world');

```

In order to execute the code inside of a function, you need to invoke, or call it. Only the second example will print out `hello world`.

---
## Function Parameters & Arguments

Parameters are the variables that we expect to be passed in when the function is invoked. These are declared during the function definition.

In the below case, `message` is the only parameter to `myFunc`

```js
function greeting (message) {
   console.log(message);
};
```

Arguments are the functions that we pass in when we invoke the function. These variables are accessible inside the body of the function.

In the below case, 'hello world' is the argument that we provide to `myFunc` when we invoke it.

```js
greeting('hello world');
```

### Default Parameters
Default parameters allow us to specify the default value of a parameter when no value (or undefined) is passed in as an argument.

```js
function multiply (x, y = 10) {
    console.log(x*y);
}

multiply(5, 2); //10

multiply(5); //50
```

### Arguments Object
Inside the body of a function, you have access to a special object called `arguments`.

```js
function foo (x, y) {
    console.log(arguments);
}

foo('a', 'b'); //{ '0': 'a', '1': 'b' }
```
This object is similar to an array and is mutable (can be changed).

---
## Return
Creating functions and invoking them is useful, but how do you get data out of a function?

```js
function addOne (num) {
    return num + 1;
}

let number = 1;

let newNumber = addOne(number);

console.log(newNumber);
```

---
## Functions as values
Javascript treats functions as first class citizens, which means you can pass them around just like you could any other type of data or variable.

```js
function addTwo (number) {
    return number + 2;
}

function addThree (number) {
    return number + 3;
}

function multiFunction (number, innerFunction) {
    return innerFunction(number);
}

let num = 1;

let newNum = multiFunction(num, addTwo);
console.log(newNum); //3

let newestNum = multiFunction(num, addThree);
console.log(newestNum); //4
```
