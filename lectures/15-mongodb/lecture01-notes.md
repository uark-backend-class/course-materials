# MongoDB

## Installation

Install using Homebrew:

```bash
`brew update`
`brew install mongodb`
`mkdir -p /data/db`
`sudo chmod 777 /data/db`
`mongod`
```

## Querying from the Shell

### Test Data

```bash
mongoimport --db test --collection restaurants --drop --file ~/path/to/file/restaurant-data.json
```

Here's a sample data record:

```json
{
  "address": {
   "building": "1007",
   "coord": [ -73.856077, 40.848447 ],
   "street": "Morris Park Ave",
   "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}
```

### Mongo Shell

The Mongo Shell is an application that can be run in the terminal and allows direct interaction with the current Mongo databases. The shell is automatically installed with MongoDB. To access it, open a new terminal window and type `mongo`.

### Create (Insert)

In the shell, we need to specify a database to use. A list of current databases can be retrieved using `show dbs` from the mongo shell.

From here, we can specify the database we want to use by using `use [databaseName]`. Our restaurant data was imported into the `test` database, so we can use that database by typing `use test` into the Mongo shell.

From here, all subsequent queries can be run within this database. Within databases, are collections. A list of collections can be seen using `show collections`.

The syntax for inserting a record is `db.collection.insert(dataGoesHere)`.

Here's a sample restaurant that we can insert:

```json
 {
    "address" : {
       "street" : "2 Avenue",
       "zipcode" : "10075",
       "building" : "1480",
       "coord" : [ -73.9557413, 40.7720266 ]
    },
    "borough" : "Manhattan",
    "cuisine" : "Italian",
    "grades" : [
       {
          "date" : ISODate("2014-10-01T00:00:00Z"),
          "grade" : "A",
          "score" : 11
       },
       {
          "date" : ISODate("2014-01-16T00:00:00Z"),
          "grade" : "B",
          "score" : 17
       }
    ],
    "name" : "Vella",
    "restaurant_id" : "41704620"
 }
```

We can insert this data by typing:

```
db.restaurants.insert({
    "address" : {
       "street" : "2 Avenue",
       "zipcode" : "10075",
       "building" : "1480",
       "coord" : [ -73.9557413, 40.7720266 ]
    },
    "borough" : "Manhattan",
    "cuisine" : "Italian",
    "grades" : [
       {
          "date" : ISODate("2014-10-01T00:00:00Z"),
          "grade" : "A",
          "score" : 11
       },
       {
          "date" : ISODate("2014-01-16T00:00:00Z"),
          "grade" : "B",
          "score" : 17
       }
    ],
    "name" : "Vella",
    "restaurant_id" : "41704620"
 });
 ```

If the insert was successful, we should see `WriteResult({ "nInserted" : 1 })` in the terminal window.

### Read

To retrieve all documents in a collection, we can use `find()`. `db.collection.find()` will return all the documents in a collection.

In order to find specific documents, we can pass information to the `find` function. This will differ based on the type of data we're querying.

#### Top-Level

To return data from a "top-level" property (like `borough` in the data we just inserted), we can pass `find` and object with the property name and the value we're looking for.

```
db.collection.find({ "borough": "Manhattan" });
```

Multiple fields can be retrieved by separating the properties and values with a comma:

```
db.collection.find({ "borough": "Manhattan", "cuisine": "Italian" });
```

#### Embedded Document

To retrieve data based on a property within a nested object, we use dot notation, just like JavaScript:

```
db.dollection.find({ "address.zipcode": "10075" });
```

#### Array Fields

To retrieve data based on a property within a nested array, we use dot notation:

```
db.dollection.find({ "grades.grade": "B" });
```

### Update

Updating documents from the shell follows the same principle as reading data. The syntax is `db.collection.update(dataToUpdatweHere)`. The update command will only update a single document by default.

Here's an example:

```
db.restaurants.update(
    { "name" : "Juni" },
    {
      $set: { "cuisine": "American (New)" },
      $currentDate: { "lastModified": true }
    }
);
```

In the above example, we're finding all documents where the name field is equal to "Juni", and then using the `$set` operator to update the value of `cuisine`. We're also using the `$currentDate` operator to update the value to of the `lastModified` field to today's date.

Updating an embedded field uses dot notation just like reading data.

```
db.restaurants.update(
  { "restaurant_id" : "41156888" },
  { $set: { "address.street": "East 31st Street" } }
);
```

To overwrite the default setting and overwrite multiple documents, we can use `multi`:

```
db.restaurants.update(
  { "address.zipcode": "10016", "cuisine": "Other" },
  {
    $set: { "cuisine": "Category To Be Determined" },
    $currentDate: { "lastModified": true }
  },
  { multi: true}
);
```

### Delete

`.remove()` will remove all documents that match the provided argument.

```
db.restaurants.remove({ "borough": "Manhattan" });
```

The above example will remove _all_ documents where `borough` equals "Manhattan." To remove only a single document, we can pass an additional option to the `remove` function:

```
db.restaurants.remove({ "borough": "Queens" }, { justOne: true })
```

Passing an empty object (`{}`) will remove all documents in the collection.

### Removing a Collection

A collection can be removed using `db.collection.drop()`.

### Removing a Database

Databases can be removed using `db.dropDatabase()`.


### Returning Only Specified Fields on a find

To get fetch only the names of restaurants in Manhattan:

```
db.restaurant.find( { borough: "Manhattan" }, { name: 1 } )
```
