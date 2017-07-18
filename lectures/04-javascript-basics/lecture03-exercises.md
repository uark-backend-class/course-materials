# Lecture 3 - JavaScript Basics: Exercises

## Exercise 1
Copy the code snippet below into a file, run it via Node and answer the following questions:

- What type of error is thrown?
- What's the error message?
- On what line does the error occur?
- In what function does the error occur?

```js
(function () {
  const o = {
    animal: 'dog',
    integer: 7,
    fruits: [
      'apple',
      'orange',
      'banana'
    ]
  };

  function convertJSON (object) {
    JSON.parse(object);
  }

  convertJSON(o);
})();
```

## Exercise 2
Convert the following code to a `do-while` loop with a failing starting condition.

```js
let dependentBoolean = false;

while (dependentBoolean) {
  console.log('in true false loop: ', dependentBoolean);
  dependentBoolean = false;
}
```

## Exercise 3
Create `for` loop that counts from 1 to 10 and pushes the current number in an array and then logs it to the console. At the end of the loop, the following should be logged to the console: 'I can count to 10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'.

## Exercise 4
Create an object that has 5 properties with string values. Create a `for-in` loop that logs each property's value to the console.

## Exercise 5
Create a `for` loop that iterates over an array with 10 numbers in it. The loop should double each number in the array and log the resulting array to the console once the loop is complete.

## Exercise 6
Create a `while` loop that logs 5 different string values to the console.
