# Lecture 3 - JavaScript Basics: Exercise Solutions

## Exercise 1
- `SyntaxError`
- `Unexpected token o in JSON at position 1`
- Line 13
- `convertJSON`

## Exercise 2
```js
let dependentBoolean = false;

do {
  console.log('inside my do while loop: ', isSomethingTrue);
  dependentBoolean = false;
} while (dependentBoolean);

console.log('after while loop');
```

## Exercise 3
```js
const numberArray = [];

for (let i = 1; i < 11; i++) {
  numberArray.push(i);
}

console.log('I can count to 10: ', numberArray);
```

## Exercise 4
```js
const fruitColors = {
  apple: 'red',
  orange: 'orange',
  banana: 'yellow',
  kiwi: 'green',
  strawberry: 'red'
};

for (let fruit in fruitColors) {
  console.log(fruitColors[fruit]);
}
```


## Exercise 5
```js
const numbers = [34, 55, 63, 22, 94, 48, 91, 100, 34, 78];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled);
```

## Exercise 6
```js
const fruits = ['banana', 'papaya', 'apple', 'peach', 'mango'];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
```
