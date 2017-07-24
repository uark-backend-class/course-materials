## Exercise 1

```js
// Manual Solution
function repeatStr(n, s) {
  var repeatedString = s;

  for (var i = 1; i < n; i++) {
    repeatedString += s;
  }

  return repeatedString;
}

// String Operation Solution
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "foo")); // "foofoofoo"
console.log(repeatStr(1, "bar spam")); // "bar spam"
console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(2, "ha ")); // "ha ha "
```

## Exercise 2

```js
// While Loop Solution
function generateRange(min, max, step){
  var generatedArray = [];
  var current = min;

  while (current <= max) {
    generatedArray.push(current);
    current += step;
  }

  return generatedArray;
}

// For Loop Solution
function generateRange(min, max, step){
  var generatedArray = [];

  for (var i = min; i <= max; i += step) {
    generatedArray.push(i);
  }

  return generatedArray;
}

console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]
```

## Exercise 3

```js
function describeList (arr) {
  if (arr.length === 0) {
    return 'empty';
  } else if (arr.length === 1){
    return 'singleton';
  } else {
      return 'longer';
  }
}

console.log(describeList([]));          // "empty"
console.log(describeList([1]));         // "singleton"
console.log(describeList([1,2]));       // "longer"
console.log(describeList([]));          // "empty"
console.log(describeList([1.5]));       // "singleton"
console.log(describeList([1.5,2.5]));   // "longer"
```

## Exercise 6

```js
function alternateCase(inputString) {
  var inputStringArray = inputString.split('');
  var alteredStringArray = [];

  for (var i = 0; i < inputStringArray.length; i++) {
    if (isUppercase(inputStringArray[i])) {
      alteredStringArray.push(inputStringArray[i].toLowerCase());
    } else if (isLowercase(inputStringArray[i])) {
      alteredStringArray.push(inputStringArray[i].toUpperCase());
    } else {
      alteredStringArray.push(inputStringArray[i]);
    }
  }

  var alteredString = alteredStringArray.join('');
  return alteredString;
}

function isUppercase(letter) {
  var charCode = letter.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    return true;
  } else {
    return false;
  }
}

function isLowercase(letter) {
  var charCode = letter.charCodeAt();
  if (charCode >= 97 && charCode <= 122) {
    return true;
  } else {
    return false;
  }
}
```

## Exercise 7

Example of iterating through each character in an array of strings

```js
let names = ['sally', 'bob', 'fred', 'maria'];

for (let i = 0; i < names.length; i++) {

    for (let j = 0; j < names[i].length; j++) {
        // names[i] === the string in our array at index i
        // names[i][j] === the letter in our string at index j
        console.log(names[i][j]);
    }

}
```

```js
function authList (arr) {
  var isValid = [];

  for (var i = 0; i < arr.length; i++) {
    var validLength = false;
    var validLowercase = false;
    var validNumber = false;
    var validChars = true;

    if (arr[i].length >= 6 && arr[i].length <= 10) {
      validLength = true;
    }

    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= 0 && arr[i][j] <= 9) {
        validNumber = true;
      }

      if (arr[i][j].charCodeAt(0) >= 97 && arr[i][j].charCodeAt(0) <= 122) {
        validLowercase = true;
      }

      if ((arr[i][j].charCodeAt(0) < 97 || arr[i][j].charCodeAt(0) > 122) && !validNumber) {
        validChars = false;
      }
    }

    if (validLength && validLowercase && validNumber && validChars) {
      isValid.push(true);
    }
  }

  return isValid.length === arr.length;
}
```

