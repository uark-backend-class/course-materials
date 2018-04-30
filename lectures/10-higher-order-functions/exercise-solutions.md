# Exercise 1

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let filterDogs = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 'dog') {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filterDogs(pets));

let filterPets = function (arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filterPets(pets, (element) => {
  return element.type === 'dog';
}));
```

# Exercise 2

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let updateDogs = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 'dog') {
      arr[i].isPrecious = true;
    } else {
      arr[i].isPrecious = false;
    }

    result.push(arr[i]);
  }

  return result;
};

console.log(updateDogs(pets));

let updateDogsWithFunc = function (arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
};

let updatedDogs = updateDogsWithFunc(pets, (element) => {
  if (element.type === 'dog') {
    element.isPrecious = true;
  } else {
    element.isPrecious = false;
  }

  return element;
});

console.log(updatedDogs);
```

# Exercise 3

```js
let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

let countDogs = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 'dog') {
      total += 1;
    }
  }

  return total;
};

console.log(countDogs(pets));

let countDogsWithFunc = function (arr, initialVal, func) {
  let total = initialVal;

  for (let i = 0; i < arr.length; i++) {
    total = func(total, arr[i]);
  }

  return total;
};

let incrementDogs = function (total, element) {
  if (element.type === 'dog') {
    return total + 1;
  } else {
    return total;
  }
};

let totalDogs = countDogsWithFunc(pets, 0, incrementDogs);

console.log(totalDogs);
```
