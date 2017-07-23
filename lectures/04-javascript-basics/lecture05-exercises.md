# Lecture 5 - JavaScript Basics: Exercises

## Exercise 1

Write a function that accepts an array of words as strings and returns a string that is a sentence. Be sure to include a period at the end of your sentence. As this is practice using the concept of scope, please do not use Array's `join` method.

## Exercise 2

Create a function that that accepts a sentence as a string and returns the longest word in the sentence as a string with just that word.

## Exercise 3

Write a function that takes a phone number as a string as an argument and performs the following:

- If the phone number is less than 10 digits assume that it is bad number
- If the phone number is 10 digits assume that it is good
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
- If the phone number is 11 digits and the first number is not 1, then it is a bad number
- If the phone number is more than 11 digits assume that it is a bad number

If the number is good, return a string containing only the numerals of the phone number. If the number is made, return a string of 10 '0's.

### Test Cases
```js
console.log(validatePhoneNumber('(123) 456-7890'));  
console.log(validatePhoneNumber('123.456.7890'));  
console.log(validatePhoneNumber('11234567890'));  
console.log(validatePhoneNumber('21234567890'));  
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));
console.log(validatePhoneNumber('123'));   
```

### Expected Result
```
1234567890  
1234567890  
1234567890  
0000000000  
0000000000
0000000000
0000000000
```
