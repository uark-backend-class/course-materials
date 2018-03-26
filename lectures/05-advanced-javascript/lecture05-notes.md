# Regular Expressions

## RegExp.test()
  - returns true / false if regex is found in string

```js
var re1 = new RegExp('abc', 'g');
var re2 = /abc/g;
var re3 = /ABC/gi;

console.log(re1.test('abc123abc123'));
console.log(re1.test('ab1c'));

console.log(re2.test('abc123abc123'));
console.log(re2.test('ab1c'));

console.log(re3.test('abc123abc123'));
console.log(re3.test('ab1c'));
```

## String.match()

  - returns all matching phrases in an array
  - `null` if no matches
  - `['match1', 'match2', index: 1, input: 'inputStr']`

```js
var re1 = new RegExp('test');
var re2 = new RegExp('test', 'g');
var re3 = new RegExp('te*st', 'g');
var firstString = 'This is a test string test test';
var secondString = 'This is a test string tester testing';
var thirdString = 'This is a teeeeeeeeeest string teeeeeeeeester teeeeeeeeesting';

console.log(firstString.match(re1));
console.log(firstString.match(re2));
console.log(firstString.match(re2).length);

console.log(secondString.match(re1));
console.log(secondString.match(re2));
console.log(secondString.match(re2).length);

console.log(thirdString.match(re3));
console.log(thirdString.match(re3).length);
```


## String.search()
  - returns index of first match
  - `-1` if no match found

```js
var re1 = new RegExp('test');
var re2 = new RegExp('test', 'g');
var re3 = new RegExp('te*st', 'g');
var firstString = 'This is a test string';
var secondString = 'This is a another test string test test';
var thirdString = 'This is a yet another teeeeeeeeeest string';

console.log(firstString.search(re1));
console.log(firstString.search(re2));
console.log(secondString.search(re1));
console.log(thirdString.search(re3));
```


## String.replace()
  - replaces matched text with the second argument

```js
var re1 = /grape/gi;
var replacement = 'apple';

var firstString = 'grapes are small rounds fruits that can be different colors and I like drinking grape juice';

console.log(firstString.replace(re1, replacement));
```
