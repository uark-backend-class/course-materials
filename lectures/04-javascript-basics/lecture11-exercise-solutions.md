## Exercise 1
```js
function grantLastName(firstNameArray, lastName) {
  let fullNameArray = firstNameArray.map(
    element => element + " " + lastName
  );

  return fullNameArray;
}
```

## Exercise 2
```js
function findByName(people, name) {
  return people.find(element => element.first === name); }
```

## Exercise 3
```js
function onlyEvens(intArray) {
  return intArray.filter(element => element % 2 === 0);
}
```

## Exercise 4
```js
[1,2,3,4,5].reduce((accumulated, currentVal) => accumulated + currentVal, 0);
```

## Exercise 5
```js
function add2(numberArray) {
  let addedArray = numberArray.map(element => element + 2);

  return addedArray;
}
```