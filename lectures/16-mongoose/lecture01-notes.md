# Mongoose.js

## What is it?

Mongoose is an object modeling library for working with MongoDB. It provides abstractions over the typical MongoDB Node methods that are easier to read. It also allows the ability to create schemas for the databases which perform validation for us. Without Mongoose, a lot of a developer's time would be spent writing validation code to ensure that what gets inserted in the database matches expectations.

## Installation

`npm install mongoose`

## Use

### Setup

To use Mongoose, we `require` it at the top of our file like any other Node module.

```js
const mongoose = require('mongoose');
```

Once we've required it, we now need to connect to the database.

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
```

At this point, the connection is still "pending". We can't interact with the database quite yet. We need to instruct MongoDB to do something when a connection is successful and if it errors when trying to connect.

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('Couldn\'t connect to the database!');
});

db.once('open',() => {
  console.log('Connected!');
});
```

We're now ready to create our first Mongoose Schema.

### Schema

A schema in mongoose is similar to a mold. It's the blueprint that specifies what the data in the database should look like.

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('Couldn\'t connect to the database!');
});

db.once('open', () => {
  console.log('Connected!');

  const puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String]
  });
});
```

Now that we have our schema (blueprint), we now need a mechanism to create multiple copies or edit existing copies (think of a construction crew that builds the house based on the blueprint).

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
var db = mongoose.connection;

db.on('error', () => {
  console.log('Couldn\'t connect to the database!');
});

db.once('open', () => {
  console.log('Connected!');

  const puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String]
  });

  const Puppy = mongoose.model('Puppy', puppySchema);
});
```

### Create

To create a puppy, we will reference the model and use the `new` keyword.

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('Couldn\'t connect to the database!');
});

db.once('open', () => {
  console.log('Connected!');

  const puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String]
  });

  const Puppy = mongoose.model('Puppy', puppySchema);

  const sprinkles = new Puppy({
    name: 'Sprinkles',
    breed: 'Dalmatian',
    age: 2,
    likes: ['snacks', 'swimming', 'playing fetch'],
    dislikes: ['all other animals', 'Dachshunds']
  });
});
```

We've created an instance of our Puppy model, but we haven't inserted it into the database yet. We can do this by using Mongoose's `save` method.

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('Couldn\'t connect to the database!');
});

db.once('open', () => {
  console.log('Connected!');

  const puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String],
    clothes: [
      { style: String, color: String }
    ]
  });

  const Puppy = mongoose.model('Puppy', puppySchema);

  const sprinkles = new Puppy({
    name: 'Sprinkles',
    breed: 'Dalmatian',
    age: 2,
    likes: ['petting', 'snacks', 'swimming'],
    dislikes: ['all other animals', 'Dachshunds']
  });

  sprinkles.save((err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);  // will log sprinkles
  });
});
```

This is all good and well for a quick and dirty implementation, but let's organize our code and make it more robust.

_index.js_:

```js
const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy.model');

mongodb.createEventListeners();
mongodb.connect();

const sprinkles = new Puppy({
  name: 'Sprinkles',
  breed: 'Dalmatian',
  age: 2,
  likes: ['petting', 'snacks', 'swimming'],
  dislikes: ['all other animals', 'Dachshunds']
});

sprinkles.save().then((result) => {
  console.log(result);
  mongodb.disconnect();
})
.catch((err) => {
  throw err;
  mongodb.disconnect();
});
```

_puppy.model.js_:

```js
const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  likes: [String],
  dislikes: [String]
});

module.exports = mongoose.model('Puppy', puppySchema);
```

_mongodb.utils.js_:

```js
const mongoose = require('mongoose');

module.exports = {
  createEventListeners,
  connect,
  disconnect
};

function createEventListeners() {
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database.');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database connection closed.');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`There was an issue connecting to the database: ${err}`);
  });
}

function connect() {
  mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
}

function disconnect() {
  mongoose.disconnect();
}
```

Ok, that's a bit easier to keep track of. Let's talk about retrieving data from the database using Mongoose.

Before we move on, it's important to note that this error may be present in the console when running queries:

```
(node:10760) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
```

To rid yourself of this message, simply tell mongoose to use the native Promises in Node (or another promise library of your choice).

```js
mongoose.Promise = global.Promise;
```

### Read

```js
// find
Puppy.find({ likes: 'snoring' })
  .exec()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// findOne
Puppy.findOne({ name: 'Sprinkles' })
  .exec()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```
