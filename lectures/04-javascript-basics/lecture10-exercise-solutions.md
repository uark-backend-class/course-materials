# Lecture 10 - JavaScript Basics: Exercise Solutions

## Exercise 1
```js
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

Solution will be covered in class on Saturday August 5th.
