# Lecture 7 - JavaScript Basics: Exercises

## Exercise 1

Write a function that accepts a number and a string, and return a string that contains the original string repeated for the number provided.

```js
console.log(repeatString(1, 'hello'));      // 'hello'
console.log(repeatString(2, 'world'));      // 'worldworld'
```


## Exercise 2

Write a function that accepts three integers: min, max and step, and returns an array where the first element is the min, and each subsequent element is counted up by the step up until the max is reached.

```js
console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]
```

## Exercise 3

Write function `describeList` which tells if the list is empty or contains only one element or more.

```js
console.log(describeList([]));          // "empty"
console.log(describeList([1]));         // "singleton"
console.log(describeList([1,2]));       // "longer"
console.log(describeList([]));          // "empty"
console.log(describeList([1.5]));       // "singleton"
console.log(describeList([1.5,2.5]));   // "longer"
```

# Exercise 4

Write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

```js
console.log(alternateCase('hello world'));      // HELLO WORLD
console.log(alternateCase('HELLO WORLD'));      // hello world
console.log(alternateCase('hello WORLD'));      // HELLO world
console.log(alternateCase('HeLLo WoRLD'));      // hEllO wOrld
console.log(alternateCase('12345'));            // 12345
console.log(alternateCase('1a2b3c4d5e'));       // 1A2B3C4D5E
console.log(alternateCase('String.prototype.charCodeAt'));  // sTRING.PROTOTYPE.CHARcODEaT  
console.log(alternateCase(alternateCase('Hello World')));  // Hello World
```

## Exercise 5

Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

- it is between 6-10 characters long
- contains at least 1 lowercase letter
- contains at least 1 number
- contains only numbers and lowercase letters

```js
console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character
```
