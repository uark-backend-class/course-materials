# Lecture 4 - JavaScript Basics - Exercise Solutions

## Exercise 1

```js
function myFunc (someArray) {
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i])
    }
}

let myArray = [1,2,3,4,5];

myFunc(myArray);
```

## Exercise 2

```js
function isNumber (arg) {
  if (typeof arg === 'number') {
    console.log(true);
  }
  console.log(false);
}

isNumber(10);
isNumber('hello');
```

## Exercise 3

```js
function myFunc (someArray) {
    let newArray = [];
    for (let i = 0; i < someArray.length; i++) {
        newArray.push(someArray[i] * 5);
    }

    return newArray;
}

let myArray = [1,2,3,4,5];

console.log(myFunc(myArray));
```

## Exercise 4

```js
function printNums (x, y) {
    let numbers = [];
    for (let i = x; i <= y; i++) {
        numbers.push(i);
    }
    return numbers;
}

console.log(printNums(2,5));
```

## Exercise 5

```js
function aNumber () {
  return 76;
}

function multFunc (fn) {
  return fn() * 10;
}

console.log(multFunc(aNumber));
```
