# Lecture 8 - JavaScript Basics: Exercises

## Exercise 1

Write a function that accepts a number and a string, and return a string that contains the original string repeated for the number provided. Do not use a built in String function for this.

### Test Cases
```js
console.log(repeatString(3, 'foo'));
console.log(repeatString(1, 'bar spam'));
console.log(repeatString(3, '*'));
console.log(repeatString(2, 'ha '));
```

### Expected Result
```
'foofoofoo'  
'bar spam'  
'***'  
'ha ha '
```

## Exercise 2

Write a function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null if argument is not valid. First, try to do the operation manually, and once you have a working solution, try to recreate the answer using built in functions.

### Test Cases
```js
console.log(maxRedigit(123));
console.log(maxRedigit(297));
console.log(maxRedigit(368));
console.log(maxRedigit(531));
console.log(maxRedigit(636));
console.log(maxRedigit(555));
console.log(maxRedigit(32));
```

### Expected Result
```
321
972
863
531
663
555
null
```


## Exercise 3

Write a function that accepts an array of integers and a target. If any two consecutive numbers in the array add up to the target, remove the second number. Return the altered array.


### Test Cases
```js
console.log(removeTargetSum([1, 3, 5, 6, 7, 4, 3], 7));
console.log(removeTargetSum([4, 1, 1, 1, 4], 2));
console.log(removeTargetSum([2, 2, 2, 2, 2, 2], 4));
```

### Expected Result
```
[1, 3, 5, 6, 7, 4]
[4, 1, 4]
[2]
```
