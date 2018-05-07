# Exercise 1

_index.js_:

```js
const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy.model');

const app = express();
app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  res.send('Root Endpoint');
});

app.get('/puppies', (req, res) => {
  Puppy.find({}).exec().then((result) => {
    res.send(result);
  });
});

app.post('/puppies', (req, res) => {
  const puppyToInsert = new Puppy({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    likes: req.body.likes,
    dislikes: req.body.dislikes
  });

  puppyToInsert.save().then((result) => {
    console.log(result);
    res.send(result);
  }).catch((err) => {
    throw(err);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
module.exports = app;
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

mongoose.Promise = global.Promise;

module.exports = {
  createEventListeners: createEventListeners,
  connect: connect,
  disconnect: disconnect
};

function createEventListeners() {
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database.');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database connection closed.');
  });

  mongoose.connection.on('error', (err) => {
    console.log('There was an issue connecting to the database: ' + err);
  });
}

function connect() {
  mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
}

function disconnect() {
  mongoose.disconnect();
}
```
