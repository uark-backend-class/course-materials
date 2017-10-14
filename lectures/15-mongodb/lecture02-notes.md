## Node.js MongoDB Driver

### Installation

The MongoDB Node.js driver is an NPM module, so we can install it and use it just like other libraries.

```bash
npm install mongodb --save
```

### Connecting to the Database

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log(`Error connecting to database: ${err}`);
  }
  console.log('Connected successfully to server');

  db.close();
});
```

### Create (Insert)

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log(`Error connecting to database: ${err}`);
  }
  console.log('Connected successfully to server');
  insertDocuments(db, () => {
    db.close();
  });
});


function insertDocuments (db, callback) {
  const collection = db.collection('node-test');
  const data = [{a : 1}, {a : 2}, {a : 3}];

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(`Unable to insert documents: ${data}`);
    }
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
```


### Read

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log('Uh oh! Something went wrong: ' + err);
  }
  console.log('Connected successfully to server');
  insertDocuments(db, () => {
    findAllDocuments(db, () => {
      db.close();
    });
  });
});

function findAllDocuments (db, callback) {
  const collection = db.collection('node-test');

  collection.find({}).toArray((err, docs) => {
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

function insertDocuments (db, callback) {
  const collection = db.collection('node-test');
  const data = [{a : 1}, {a : 2}, {a : 3}];

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log('Unable to insert 3 documents: ', err);
    }
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
```

### Update

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log('Uh oh! Something went wrong: ' + err);
  }
  console.log('Connected successfully to server');
  insertDocuments(db, () => {
    updateDocument(db, () => {
      db.close();
    });
  });
});

function insertDocuments (db, callback) {
  const collection = db.collection('node-test');
  const data = [{a : 1}, {a : 2}, {a : 3}];

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(`Unable to insert 3 documents: ${err}`);
    }
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
}

function updateDocument (db, callback) {
  const collection = db.collection('node-test');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }, { $set: { b : 1 } }, (err, result) => {
    console.log('Updated the document with the field a equal to 2');
    callback(result);
  });  
}
```

### Delete

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log(`Uh oh! Something went wrong: ${err}`);
  }
  console.log('Connected successfully to server');
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        db.close();
      });
    });
  });
});

function insertDocuments (db, callback) {
  const collection = db.collection('node-test');
  const data = [{a : 1}, {a : 2}, {a : 3}];

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(`Unable to insert 3 documents: ${err}`);
    }
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
}

function updateDocument (db, callback) {
  const collection = db.collection('node-test');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }, { $set: { b : 1 } }, (err, result) => {
    console.log('Updated the document with the field a equal to 2');
    callback(result);
  });  
}

function removeDocument (db, callback) {
  const collection = db.collection('node-test');
  collection.deleteOne({ a : 3 }, (err, result) => {
    console.log('Removed the document with the field a equal to 3');
    callback(result);
  });    
}
```
