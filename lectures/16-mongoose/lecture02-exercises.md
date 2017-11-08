- Exercise 1
  - Create a new database called pets
  - Write a node script that will import all the puppies in the provided list into the database using Mongoose
    - Hint: Use Mongoose's `insertMany` method. Look up implementation info in their documentation
  - Create a small Express application that will return all the puppies from the database from a GET request

- List of Puppies
```js
var puppies = [
  {
    name: 'Fluffykins',
    breed: 'Labradoodle',
    age: 1,
    likes: ['naps', 'bones', 'cuddles'],
    dislikes: ['kitties', 'milk']
  },
  {
    name: 'Sprinkles',
    breed: 'Dalmatian',
    age: 3,
    likes: ['petting', 'snacks', 'swimming'],
    dislikes: ['all other animals', 'Dachshunds']
  },
  {
    name: 'Bibblyboo',
    breed: 'Pug',
    age: 2,
    likes: ['snoring', 'pooping'],
    dislikes: ['Dalmatians', 'trees']
  },
  {
    name: 'Fred',
    breed: 'Frenchie',
    age: 1,
    likes: ['snark', 'chasing rabbits', 'turkey'],
    dislikes: ['birds', 'squirrels', 'uneven bedding']
  }
];
```

- Exercise 2
  - Add a GET endpoint for author that searches by first name
  - Add a GET endpoint for author that searches by last name
  - Add a GET endpoint for book that searches by title
  - Add a POST endpoint for adding a new author
    - If the author has books in the system already, update the books to include the author
    - You may assume that authors will have unique first and last name combinations
  - Add a POST endpoint for adding a new book
    - If the book is by an author that already exists in the system, update the author to include the book being added
    - You may assume that a book has only one author
  - Add a PUT endpoint for updating an author
  - Add a PUT endpoint for updating a book
