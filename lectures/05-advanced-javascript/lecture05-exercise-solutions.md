# Exercise 1

```js
function validateNumber(code) {
  var regEx = new RegExp('^[123]');
  return regEx.test(code);
}

console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // true
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9453)); // false
```

```js
function validateNumber(code) {
  return /^[123]/.test(code);
}

console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // true
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9453)); // false
```


# Exercise 2

```js
function validateNumber(code) {
  var regEx = new RegExp('[123]$');
  return regEx.test(code);
}

console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // false
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9452)); // true
```

```js
function validateNumber(code) {
  return /[123]$/.test(code);
}

console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // false
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9452)); // true
```


# Exercise 3

```js
function myIsDigit(character) {
  return /^\d$/.test(character);
}

console.log(myIsDigit('')); // false
console.log(myIsDigit('7')); // true
console.log(myIsDigit(' ')); // false
console.log(myIsDigit('a')); // false
console.log(myIsDigit('2')); // true
console.log(myIsDigit('a5')); // false
console.log(myIsDigit('14')); // false
```

```js
function myIsDigit(character) {
  return /^\d{1}$/.test(character);
}

console.log(myIsDigit('')); // false
console.log(myIsDigit('7')); // true
console.log(myIsDigit(' ')); // false
console.log(myIsDigit('a')); // false
console.log(myIsDigit('2')); // true
console.log(myIsDigit('a5')); // false
console.log(myIsDigit('14')); // false
```


# Exercise 4

```js
function dateChecker(dateToCheck) {
  var regEx = /\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/;
  return regEx.test(dateToCheck);
}

console.log(dateChecker('01-09-2016 01:20')); true
console.log(dateChecker('01-09-2016 01;20')); false
console.log(dateChecker('01_09_2016 01:20')); false
console.log(dateChecker('14-10-1066 12:00')); true
console.log(dateChecker('Tenth of January')); false
```

```js
function dateChecker(dateToCheck) {
  var regEx = /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/;
  return regEx.test(dateToCheck);
}

console.log(dateChecker('01-09-2016 01:20')); true
console.log(dateChecker('01-09-2016 01;20')); false
console.log(dateChecker('01_09_2016 01:20')); false
console.log(dateChecker('14-10-1066 12:00')); true
console.log(dateChecker('Tenth of January')); false
```

# Exercise 5
```js
function countVowels(stringToCheck) {
  var matchArray = stringToCheck.match(/[aeiou]/gi);
  return matchArray ? matchArray.length : 0;
}

console.log(countVowels('bbababba'));   // 3
console.log(countVowels('hellohellohellohello'));   // 8
console.log(countVowels('krtmndsptzxvbmnwrt'));   // 0
console.log(countVowels('asljdflsajfieworiuewnvndsfbawofejawefjiofajdsdf'));    // 16
console.log(countVowels('asljdflsAjfiewOriuEwnvndsfbawofejawefjIOfajdsdf'));    // 16
```


# Exercise 6
```js
function lowercaseCount(stringToCheck) {
    var lowercaseArray = stringToCheck.match(/[a-z]/g);
    return lowercaseArray ? lowercaseArray.length : 0;
}

console.log(lowercaseCount('abc')); // 3
console.log(lowercaseCount('abcABC123')); // 3
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 3
console.log(lowercaseCount('')); // 0;
console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 0
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz')); // 26
```


# Exercise 7
```js
function findPNG(files) {
  var pngs = [];
  for (var i = 0; i < files.length; i++) {
    if (/\.png$/.test(files[i])) {
      pngs.push(files[i]);
    }
  }
  return pngs;
}

console.log(findPNG(['img01.jpeg', 'file.png', 'xrf214579.gif', 'image.png', 'dogs.tif']));
console.log(findPNG(['asfldjasdfjpng.jpeg', 'pngsagsdfj.png', '.pngsdfasdfsaf.gif', '.pngasdfasifsda.png', 'uiuiuiiaisdfi.tif']));
```

# Exercise 8 / Homework

We live in a future where we have the ability to build our own cars using JavaScript (hey - it could happen). Your task is to create a blueprint for a car, and then produce two cars from that blueprint. Your task:

  - Create a folder named `js-cars` from the command line
  - Initialize the `js-cars` folder as a git repository
  - Create a file named `blueprint.js` from the command line
    - In this file, create a car blueprint. Your car should have:
      - Between 0 - 6 wheels
      - A top speed
      - A color
      - A function to report how long this car would take to travel 1/4 mile at top speed
    - Within this same file, create two different versions of cars based on this blueprint
  - Commit and push all changes to a new GitHub repository from the command line