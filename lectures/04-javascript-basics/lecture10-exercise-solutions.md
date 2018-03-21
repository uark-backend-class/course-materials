# Lecture 10 - JavaScript Basics: Exercise Solutions

## Exercise 1
```js
// SOLUTION: Using reduce.
function findOldest(developerArray) {
  let oldest = developerArray.reduce(function(currentOldest, contender) {
    if (contender.age >= currentOldest[0].age) {
      if (contender.age != currentOldest[0].age) {
        currentOldest.length = 0;
      }
      currentOldest.push(contender);
      return currentOldest;
    }
    else {
      return currentOldest;
    }
  }, [ { age: 0 } ]);

  return oldest;
}

// SOLUTION: Using for loops
function findOldest (listOfPeople) {
  let age = 0;
  let oldest = [];

  for (let i = 0; i < listOfPeople.length; i++) {
    if (listOfPeople[i].age > age) {
      age = listOfPeople[i].age;
    }
  }

  for (let i = 0; i < listOfPeople.length; i++) {
    if (listOfPeople[i].age === age) {
      oldest.push(listOfPeople[i]);
    }
  }

  return oldest;
}

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
```

## Exercise 2
```js
function wantedWords(wordPool, numVowels, numConsonants, forbiddenLetters) {
  const matchingWords = [];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < wordPool.length; i++) {
    const vowelsInWord = howManyMatches(wordPool[i], vowels);
    const consonantsInWord = howManyMatches(wordPool[i], consonants);
    const forbiddenLettersInWord = howManyMatches(wordPool[i], forbiddenLetters);

    if ((vowelsInWord === numVowels) && (consonantsInWord === numConsonants) && (forbiddenLettersInWord === 0)) {
      matchingWords.push(wordPool[i]);
    }
  }

  return matchingWords;
}

function howManyMatches(word, letterList) {
  let matches = 0;

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letterList.length; j++) {
      if (word[i] === letterList[j]) {
        matches++;
      }
    }
  }

  return matches;
}

var wordList = ['strength', 'afterwards', 'background', 'photograph', 'successful', 'understand'];

console.log(wantedWords(wordList, 1, 7, ['m', 'y']));
console.log(wantedWords(wordList, 3, 7, ['m', 'y']));
console.log(wantedWords(wordList, 3, 7, ['a', 's' , 'm', 'y']));
```
