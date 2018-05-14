_import-script.js_:

```js
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/pets');

mongoose.connection.on('error', function () {
  console.log('Couldn\'t connect to the database!');
});

mongoose.connection.once('connected', function() {
  console.log('Connected!');
});

var puppySchema = mongoose.Schema({
  name: String,
  breed: String,
  likes: [String],
  dislikes: [String]
});

var Puppy = mongoose.model('Puppy', puppySchema);

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

Puppy
  .insertMany(puppies)
  .then(function (result) {
    console.log(result);
    mongoose.disconnect();
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });
```

_index.js_:

```js
var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pets');

mongoose.connection.on('connected', function () {
  console.log('Connected to database');
});

mongoose.connection.on('error', function () {
  console.log('Could not connect to db');
});

var puppySchema = mongoose.Schema({
  name: String,
  breed: String,
  likes: [String],
  dislikes: [String]
});

var Puppy = mongoose.model('Puppy', puppySchema);

app.get('/', function (req, res) {
  Puppy.find({})
    .exec()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
