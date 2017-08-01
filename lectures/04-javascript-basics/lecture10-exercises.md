# Lecture 10 - JavaScript Basics: Exercises

## Exercise 1

You will be given an array of objects representing data about developers who have signed up to attend the next coding meet-up that you are organizing. Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

### Test Cases
```js
var listOne = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

var listTwo = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 54, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];

var listThree = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 25, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];

console.log(findOldest(listOne));
console.log(findOldest(listTwo));
console.log(findOldest(listThree));
```

### Expected Results
```
[ { firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP' },
  { firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP' } ]

[ { firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 54,
    language: 'PHP' } ]

[ { firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python' } ]

```

## Exercise 2

Write a function that accepts four parameters:
  - an array of words to match against the following rules
  - the number of vowels the word can have, may be repeated, for example: in "engineering", there are 5 vowels
  - the number of consonants the word can have, may also be repeated: in "engineering", there are six consonants
  - an array of letters forbidden in the word

The function should return an array of all the words that match the passed in rules. If no words are found, return an empty array.

### Test Cases
```js
var wordList = ['strength', 'afterwards', 'background', 'photograph', 'successful', 'understand'];

console.log(wantedWords(wordList, 1, 7, ['m', 'y']));
console.log(wantedWords(wordList, 3, 7, ['m', 'y']));
console.log(wantedWords(wordList, 3, 7, ['a', 's' , 'm', 'y']));
```

### Expected Results
```
['strength']
['afterwards', 'background', 'photograph', 'successful', 'understand']
[]
```
