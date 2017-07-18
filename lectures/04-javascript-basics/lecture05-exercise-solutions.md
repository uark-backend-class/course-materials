# Lecture 5 - JavaScript Basics: Exercise Solutions

## Exercise 1
```js
const sentenceArray = ['This', 'is', 'an', 'example', 'sentence'];

function makeASentence(words) {
  let sentence = '';

  for (let i = 0; i < words.length; i++) {
    sentence += words[i];

    if (i < (words.length - 1)) {
      sentence += ' ';
    }
  }

  sentence += '.';

  return sentence;
}

console.log(makeASentence(sentenceArray));
```

## Exercise 2
```js
function findLongestWord(stringToCheck) {
  const words = stringToCheck.split(' ');
  const wordLengths = [];
  let longestLength = 0;

  for (let i = 1; i < words.length; i++) {
    wordLengths.push(words[i].length);
  }

  for (let i = 1; i < wordLengths.length; i++) {
    if (wordLengths[i] > longestLength) {
      longestLength = i;
    }
  }

  return words[longestLength];
}

var sentence = 'Hello sunshine';
console.log(findLongestWord(sentence));
```
```js
function findLongestWord(stringToCheck) {
  const words = stringToCheck.split(' ');
  const wordLengths = [];
  let longestLength = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[longestLength].length) {
      longestLength = i;
    }
  }

  return words[longestLength];
}

var sentence = 'Hello sunshine';
console.log(findLongestWord(sentence));
```

## Exercise 3
Will be posted after lecture on Wednesday
