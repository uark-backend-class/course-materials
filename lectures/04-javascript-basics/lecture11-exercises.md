# Lecture 11 - JavaScript Basics: Exercises

## Exercise 1

Given an array of first names, create a function called grantLastName that takes two parameters, an array of first name strings and a single last name string. The function should return an array with last names appended to the first names. Do not use a loop.

```js
function grantLastName(firstNameArray, lastName) {
  // Your code here
  // 
  return fullNameArray;
}
```

#### Test Cases
```js
console.log(grantLastName(['James', 'Sue'], 'Smith'));
```

#### Expected Results
```
['James Smith', 'Sue Smith']
```

## Exercise 2

Write a function called findByName that takes two parameters. The first parameter is an array of objects that contain a first and a last property. The second parameter is a first name.

#### Test Cases
```js
let people = [
  { first: "Joe", last: "Montana" },
  { first: "Steve", last: "Young" },
  { first: "Troy", last: "Aikman" },
]

console.log(findByName(people, "Steve"));
```

#### Expected Results
```js
{ first: "Steve", last: "Young" }
```

## Exercise 3
Write a function called onlyEvens that takes an array of integers as a parameter. The function returns an array with only even numbers.

#### Test Cases
```js
console.log(onlyEvens([1, 2, 3, 4, 5]));
```
#### Results
```js
[2, 4]
```

## Exercise 4
Use the reduce function to calculate the sum of an array of numbers.
#### Test Cases
```js
[1,2,3,4,5].reduce(/* YOUR CODE HERE */);
```
#### Results
```js
15
```
## Exercise 5
Write a function called add2 that takes a single array of integers as a parameter and that returns an array with all of the numbers increased by two. 
#### Test Cases
```js
console.log(add2([1, 2, 3])); 
```
#### Results
```js
[3, 4, 5]
```