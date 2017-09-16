# Higher Order Functions

## What are they?

Higher order functions refers to any function that takes a function as an argument or returns a function. We've done this before in our code, but it now has a name.

Example:

```js
let addTwice = function (func, value) {
  return func(func(value));
};

let addTen = function (value) {
  return value + 10;
};

console.log(addTwice(addTen, 5));   // 25
```

In the above example, `addTwice` is a higher order function.

## Why are they important?

Higher-order functions allow us to write code that's:
  - Easier to read
    - Displays intent
  - Composition
    - Can use the function with other functions ("compose")
  - Because the code is easier to read and easy to reason about, there are fewer bugs

## Most Common Higher-Order Functions

### Filter

Filter is a function on the Array prototype that takes a callback function and will return a new array containing only the elements where the result of the callback was equal to `true`. The callback function receives 3 arguments from the filter function:

- `element` - the current element in the array
- `index` - the index of the current element in the array
- `origArray` - the original array

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let dogs = pets.filter((element, index, origArray) => {
  return element.type === 'dog';
});

console.log(dogs);

/*
[
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Fluffykins', type: 'dog' }
];
*/
```

This can be condensed even more so that it is easier to read:

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let isDog = function (element, index, origArray) {
  return element.type === 'dog';
};

let dogs = pets.filter(isDog);

console.log(dogs);
```

### Map

Map is a function on the Array prototype that takes a callback function and replaces the current element in the array with whatever is returned from the callback function. The callback function receives 3 arguments from the filter function:

- `element` - the current element in the array
- `index` - the index of the current element in the array
- `origArray` - the original array

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let dogs = pets.map((element, index, origArray) => {
  if (element.type === 'cat') {
    element.isPrecious = false;
    return element;
  }
  element.isPrecious = true;
  return element;
});

console.log(dogs);

/*
[
  { name: 'Sprinkles', type: 'dog', isPrecious: true },
  { name: 'Reece', type: 'dog', isPrecious: true },
  { name: 'Pukes-a-lot', type: 'cat', isPrecious: false },
  { name: 'Not-a-real-pet', type: 'cat', isPrecious: false },
  { name: 'Fluffykins', type: 'dog', isPrecious: true },
  { name: 'Ugly', type: 'cat', isPrecious: false }
];
*/
```

Similarly, this can be written in a way which expresses our intent:

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let allDogsArePrecious = function (element, index, origArray) {
  if (element.type === 'cat') {
    element.isPrecious = false;
    return element;
  }
  element.isPrecious = true;
  return element;
};

let dogs = pets.map(allDogsArePrecious);

console.log(dogs);

/*
[
  { name: 'Sprinkles', type: 'dog', isPrecious: true },
  { name: 'Reece', type: 'dog', isPrecious: true },
  { name: 'Pukes-a-lot', type: 'cat', isPrecious: false },
  { name: 'Not-a-real-pet', type: 'cat', isPrecious: false },
  { name: 'Fluffykins', type: 'dog', isPrecious: true },
  { name: 'Ugly', type: 'cat', isPrecious: false }
];
*/
```

### Reduce

Reduce is a function on the Array prototype that takes a callback function and adds the result of the callback to an accumulated value. The callback function receives 4 arguments from the filter function:

- `accumulator` - the running total of the reduce function
- `element` - the current element in the array
- `index` - the index of the current element in the array
- `origArray` - the original array

In addition to the callback argument, `reduce` takes an optional `initialValue` argument that serves as the starting value. If no `initialValue`is provided, `reduce` will use the first element in the array as the initial value.

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let dogCount = pets.reduce((total, element, index, origArray) => {
  if (element.type === 'dog') {
    return total + 1;
  }
  return total + 0;
}, 0);

console.log(dogCount);  // 3
```

And rewritten:

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let countIfDog = function (total, element, index, origArray) {
  if (element.type === 'dog') {
    return total + 1;
  }
  return total + 0;
};

let dogCount = pets.reduce(countIfDog, 0);

console.log(dogCount);  // 3
```
