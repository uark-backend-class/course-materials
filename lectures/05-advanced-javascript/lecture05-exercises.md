# Exercise 1

Write a function that accepts a number and uses regular expressions to check if the number begins with a 1, 2 or 3, and returns true if so. Otherwise, return false.

```js
console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // true
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9453)); // false
```


# Exercise 2

Write a function that accepts a number and uses regular expressions to check if the code ends with a 1, 2 or 3, and returns true if so. Otherwise, return false.

```js
console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // false
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9452)); // true
```


# Exercise 3

Write a function that accepts a string argument and return true if that string is a digit. Otherwise, return false. Use regular expressions.

```js
console.log(myIsDigit('')); // false
console.log(myIsDigit('7')); // true
console.log(myIsDigit(' ')); // false
console.log(myIsDigit('a')); // false
console.log(myIsDigit('2')); // true
console.log(myIsDigit('a5')); // false
console.log(myIsDigit('14')); // false
```


# Exercise 4

Write a function that accepts a date and checks to see if the date is formatted '00-00-0000 00:00'

```js
console.log(dateChecker('01-09-2016 01:20')); true
console.log(dateChecker('01-09-2016 01;20')); false
console.log(dateChecker('01_09_2016 01:20')); false
console.log(dateChecker('14-10-1066 12:00')); true
console.log(dateChecker('Tenth of January')); false
```

# Exercise 5

Write a function that takes a string and returns the number of vowels in that string. Use a regular expression to find the vowels in the string.

```js
console.log(countVowels('bbababba'));   // 3
console.log(countVowels('hellohellohellohello'));   // 8
console.log(countVowels('krtmndsptzxvbmnwrt'));   // 0
console.log(countVowels('asljdflsajfieworiuewnvndsfbawofejawefjiofajdsdf'));    // 16
console.log(countVowels('asljdflsAjfiewOriuEwnvndsfbawofejawefjIOfajdsdf'));    // 16
```


# Exercise 6

Write a function that takes a string and return the number of lowercase letters in that string. Use a regular expression find the lowercase letters in the string.

```js
console.log(lowercaseCount('abc')); // 3
console.log(lowercaseCount('abcABC123')); // 3
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 3
console.log(lowercaseCount('')); // 0;
console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 0
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz')); // 26
```


# Exercise 7

Write a function that takes an array of file names and returns a array of only the PNG images.

```js
console.log(findPNG(['img01.jpeg', 'file.png', 'xrf214579.gif', 'image.png', 'dogs.tif']));   // ['file.png', 'image.png']
console.log(findPNG(['asfldjasdfjpng.jpeg', 'pngsagsdfj.png', '.pngsdfasdfsaf.gif', '.pngasdfasifsda.png', 'uiuiuiiaisdfi.tif']));    // ['pngsagsdfj.png', '.pngasdfasifsda.png']
```
