# Lecture 6 - JavaScript Basics: Exercises

# Exercise 1

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function that takes a ROT13 cipher and decodes it.

Hint: look into charCodeAt() - capital A is at ???, capital Z is at ???

## Test Cases
```js
console.log(cipher('SERR CVMMN'));  
console.log(cipher('LBH QVQ VG'));  
```

## Expected Results
```
FREE PIZZA  
YOU DID IT
```  

# Exercise 2

Write a function that accepts a string as an argument and returns the reverse of it, do not use `.reverse()`.

## Test Cases
```js
console.log(reverseString('Hello, World!'));  
console.log(reverseString('This is a test'));  
console.log(reverseString('Javascript is great!'));  
console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
console.log(reverseString('A'));  
```

## Expected Results
```
!dlroW ,olleH  
tset a si sihT  
!taerg si tpircsavaJ  
8ex3LGbm2pALCs?3BTynbxJvJUujRw  
A
```

# Exercise 3

Write a function that calculates how much to tip based on the total price and a service rating. Tips should be rounded up to the nearest dollar. Service ratings as follows and should be case insensitive:

Terrible: 0%
Poor: 5%
Good: 10%
Great: 15%
Excellent: 20%

If an unrecognized rating is received, return "Rating not recognized";

## Test Cases
```js
console.log(calculateTip(20, 'terrible'));  
console.log(calculateTip(26.95, 'good'));  
console.log(calculateTip(26.95, 'kind of okay but not great'));  
console.log(calculateTip(20, 'Excellent'));  
console.log(calculateTip(26.95, 'good'));  
```
