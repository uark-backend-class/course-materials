# Exercise 1

```js
[
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
]
```

## Part 1

Create a function that takes the array of objects mentioned above and returns a new array containing only the dog objects. 
This will accomplish the same result as the `.filter` example but should be done with a loop.

## Part 2

Create two functions. The first function should take two arguments: the array of pets, and a second function. 
The second function should accept one argument: a pet object from the array, 
and return true if the object is a dog otherwise it should return false.
The first function should loop through the array that you pass in as the first argument, 
and use the second function to build an array of only dogs. You should then return the array of only dogs.


# Exercise 2

```js
[
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
]
```

## Part 1

Create a function that takes the array of objects mentioned above and returns a new array where every object contains a new property called `isPrecious` that is `true` for dogs and `false` for cats.

## Part 2

Create two functions. 
The first function should take two arguments: the array of pets, and a second function.
The second function should accept one argument: a pet object from the array, 
and add the `isPrecious` property to the object. 
The value of the `isPrecious` property should be true if the pet is 
a dog and false if the pet is a cat.
The first function should loop through the array that you pass as the first argument, 
and use the second function to add the `isPrecious` property to all of the objects. 
You should then return the array of pets.

# Exercise 3

```js
[
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
]
```

## Part 1

Create a function that takes the array of objects mentioned above and returns the number of objects that are dogs.

## Part 2

Create two functions. The first should accept 3 arguments: the array of pets, the initial count, and a function. The second function should 
accept two arguments: the current total, and a pet object from the array. 
The second function should check to see if the element passes in is a dog, and if so it should return the total + 1, otherwise it should just return the total.
Use these two functions to loop over the array and count the number of dogs in the array. 


