# Lecture 3 - JavaScript Basics: Exercises

## Exercise 1 (Conditionals)
- Write a javascript file that contains two number variables.
- Write a conditional statement to compare the two variables and output the larger of the two variables to the console.

## Exercise 2 (Conditionals)
- Write a javascript file that contains a number variable for a year.
- Determine if the year is a leap year.
  - Leap years are divisible by four - except for years which are both divisible by 100 and not divisible by 400
- Log to the console the year followed by true if a leap year or false if it is not a leap year (e.g. "2000 true", "1900 false", "2016 true", "1992 true")

## Exercise 3 (Loops)
- Write a while loop to write 0 to 10 to the console.
- Write a for loop to write 0 to 10 to the console.

## Exercise 4 (Loops)
- Write a for loop to write even numbers 0 to 20 to the console.
- Write a for loop to write odd numbers 0 to 20 to the console.

## Exercise 5 (Loops)
- Do the looping a triangle exercise in Eloquent JavaScipt located at the end of the chapter [here](http://eloquentjavascript.net/02_program_structure.html).

## Exercise 6
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

## Exercise 7
Convert the following code to a `do-while` loop with a failing starting condition.

```js
let dependentBoolean = false;

while (dependentBoolean) {
  console.log('in true false loop: ', dependentBoolean);
  dependentBoolean = false;
}
```

## Exercise 8
Create `for` loop that counts from 1 to 10 and pushes the current number in an array and then logs it to the console. At the end of the loop, the following should be logged to the console: 'I can count to 10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'.

## Exercise 9
Create an object that has 5 properties with string values. Create a `for-in` loop that logs each property's value to the console.

## Exercise 10
Create a `for` loop that iterates over an array with 10 numbers in it. The loop should double each number in the array and log the resulting array to the console once the loop is complete.

## Exercise 11
Create a `while` loop that logs 5 different string values to the console.


