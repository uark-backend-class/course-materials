# Lecture 2 - JavaScript Basics - Exercise Solutions

## Exercise 1
```js
let myName = 'Brenna';
console.log(myName);
```

## Exercise 2
```js
// A string
let demoString = 'This is a string';

// An array with five numbers
let numberArray = [1, 2, 3, 4, 5];

// An array containing three different data types
// This array actually contains five different data types
// It is to demonstration how to include each type in an array
let a;
let mixedArray = ['string', 6, null, a, true, (1 === 3)];

// A two dimensional array
let twoDimensionalArray = [
  ['array', 'one'],
  [7, 8, 9, 10, 11]
];

// An object with three properties
let threeProperties = {
  'propertyTheFirst' : 1,
  'propertyTheSecond' : 'a value goes here',
  'propertyTheThird' : true
};

// Another example of an object with three properties
let validObject = {
  propertyTheFirst : 1,
  propertyTheSecond : 'a value goes here',
  propertyTheThird: demoString
};

// An object with multiple properties, with one property being an object
// Two properties an objects, but it was demonstrating how you can
// create both object literals or use variables that are objects
let multipleProperties = {
  'one' : 1,
  'two' : threeProperties,
  'three' : {
    'a' : 'A',
    'b' : false,
    'c' : 674937384
  }
};
```
