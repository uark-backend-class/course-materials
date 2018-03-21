# Lecture 3 - Advanced JavaScript: Exercise Solutions

## Exercise 1
```js
let myArray = [1,2,3,4,5];

Array.prototype.logMyArray = function() {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
}

myArray.logMyArray();
```
