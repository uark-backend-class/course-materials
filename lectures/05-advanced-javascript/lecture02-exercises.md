# Exercise 1

Using what we've learned, how could we call getFullName, but force its this to be a different context than person? There are multiple ways to do this, try to find multiple solutions

```js
'use strict';

let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(person.getFullName());
```


# Exercise 2

Create an object with a two properties that contain strings and a third property that is a function that prints the values of the first two out using `this`, then invoke that function.

# Exercise 3

Complete the following snippet:

```js

function addTwo() {
    console.log(this.num + 2);
}

// how would you call the above function so that it would print out '10'

```