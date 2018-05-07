# MongoDB
- Node.js MongoDB Driver
  - Installation
  - Use
  # Data Aggregation and Indexing
    - Data Aggregation
      - [Getting Started With Aggregation](https://docs.mongodb.com/getting-started/shell/aggregation/)
      - Aggregation
        - Aggregation operations process data records and return computed results.
        - Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data in order to return a single results.
      - Aggregation Pipeline
        - In MongoDB, aggregation is modeled on the concept of data processing pipelines.
        - Documents enter a multi-stage pipeline that transforms them into an aggregated result.
      - Pipeline Operations
        - The most basic pipeline stages provide filters that operate like queries and document transformations that modify the form of the output.
        - Other pipeline operations provide tools for grouping and sorting documents by specific field or fields as well as tools for aggregating the contents of arrays, including arrays of documents.
        - Pipeline stages can also use operators for tasks such as calculating the average or concatenating a string.
      - Pipeline Aggregation Stages
        - [Pipeline Aggregation Stages](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)
        - [SQL to Aggregation Comparison](https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/)
      - $group Stage Demo
        - [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group)
        - Groups input documents by a specified identifier expression and applies the accumulator expression(s), if specified, to each group.
        - Consumes all input documents and outputs one document per each distinct group.
        - The output documents only contain the identifier field and, if specified, accumulated fields.
        - Demo
          ```js
          db.restaurants.aggregate(
            [
              { $group: { "_id": "$borough" } }
            ]
          );

          db.restaurants.aggregate(
            [
              { $group: { "_id": "$borough", "count": { $sum: 1 } } }
            ]
          );
        ```
        - Exercises
          - Find by cuisine type
            ```js
            db.restaurants.aggregate(
              [
                { $group: { "_id": "$cuisine", "count": { $sum: 1 } } }
              ]
            );
            ```
          - Find by zip code
            ```js
            db.restaurants.aggregate(
              [
                { $group: { "_id": "$address.zipcode", "count": { $sum: 1 } } }
              ]
            );
          ```
      - $match Stage Demo
        - [$match](https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match)
        - Filters the document stream to allow only matching documents to pass unmodified into the next pipeline stage.
        - $match uses standard MongoDB queries. For each input document, outputs either one document (a match) or zero documents (no match).
        - Demo
          ```js
          db.restaurants.aggregate(
             [
               { $match: { "borough": "Queens", "cuisine": "Brazilian" } }
             ]
          );
          ```
        - Exercise
          - Find all Italian restaurants in the 10462 zip code
            ```js
            db.restaurants.aggregate(
               [
                 { $match: { "address.zipcode": "10462", "cuisine": "Italian" } }
               ]
            );
            ```
      - Multistage Demo
        - Demo
          ```js
          db.restaurants.aggregate(
             [
               { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
               { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } }
             ]
          );
          ```
        - Exercise
          - Count the number of results the match demo returns
            ```js
            db.restaurants.aggregate(
               [
                 { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
                 { $group: { "_id" : "$borough", "count": { $sum: 1 } } }
               ]
            );

            db.restaurants.aggregate(
               [
                 { $match: { "cuisine": "Italian" } },
                 { $group: { "_id" : "$borough", "count": { $sum: 1 } } }
               ]
            );
            ```
          - Sort the results of the multistage demo from greatest to least
            ```js
            db.restaurants.aggregate(
               [
                 { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
                 { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } },
                 { $sort: { "count" : -1 }}
               ]
            );

            db.restaurants.aggregate(
               [
                 { $match: { "cuisine": "Italian" } },
                 { $group: { "_id" : "$borough", "count": { $sum: 1 } } },
                 { $sort: { "count" : 1 }}
               ]
            );
            ```
    - Indexing
      [Getting Started With Indexing](https://docs.mongodb.com/getting-started/shell/indexes/)
      - Indexing
        - Done to support efficient execution of queries.
        - Without indexing, a collection scan (a scan of every document in a connection) must be done in order to execute a query.
        - With indexes, if an appropriate index exists for a query, it can be used to limit the number of documents that must be inspected.
      - What is an Index
        - An index is a special data structure that stores a small portion of the collections data set in an easy to traverse form.
        - The index stores the value of a specific field or set of fields, ordered by value.
        - The ordering of the index supports efficient equality matching and range queries.
        - Indexes are defined at the collection level.
      - Index Types
        - Single-Field: ascending/descending sorting indexes on any field in the collection.
        - Compound: indexes that can support queries that match on multiple fields.
      - Creating an Index
        - When creating a collection, an index on the \_id field is created automatically.
        - To create an index on another field or selection of fields, the createIndex() method can be used.
        - Creating an index is an administration operation and the createIndex() method should not be called on a regular basis.
      - Creation and Performance
        - While the index is being created, the database that holds the collection is unavailable for read or write until the index creation is complete.
        - To avoid this, it is possible to run the index create in the background.
      - Writes and Indexes
        - Write operations may require updates to indexes. If a write operation modifies in indexed field, all indexes that have the modified field as a key are automatically updated.
        - If your application is write-heavy, indexes might affect performance.
      - Index Behavior
        - Each index requires at least 8 kB of data space.
        - Adding an index has some negative impact for write operations since inserts may require index updates.
        - Collections with high read-to-write ratios benefit from additional indexes.
        - When active, each index consumes disk space and memory, which should be accounted for while capacity planning.
      - Indexing Strategies
        - Create indexes that support your queries.
          - An index supports a query when the index contains all the fields scanned by the query. Creating indexes that supports queries results in greatly increased query performance.
          - If all or most of your queries use the same key or set of keys, that's a good indication of what to use to make an index.
        - Use indexes to sort query results.
          - For compound indexes, the query sort keys must be in the same order as they appear in the index.
        - Ensure indexes fit in RAM.
          - The db.collection.totalIndexSize() function will return the size of the index data in bytes. The server must have enough RAM to hold both the total index usage, but also working set, or the data that the database uses most often.
          - If you have and use multiple collections, you must consider the size of all indexes on all collections. The indexes and the working set must be able to fit in memory at the same time.
        - Create queries that ensure selectivity.
          - Selectivity is the ability of a query to narrow results using the index. This is what allows the use of indexes for a larger portion of the work associated with fulfilling the query.
          - To ensure selectivity, write queries that limit the number of possible documents with the indexed field.
            - Binary fields tend towards lower selectivity.
          - If you need to use a lower selectivity field in your index, compound it with another field.
      - Index Example
        - Viewing index data
          - What indexes exist:
            ```js
            db.restaurants.getIndexes();
            ```
          - Index size:
            ```js
            db.restaurants.stats();
            ```
        - Create single-field index
          ```js
          db.restaurants.createIndex( { "cuisine": 1 } )
          ```
        - Create compound index
          ```js
          db.restaurants.createIndex( { "cuisine": 1, "address.zipcode": -1 } )
          ```
        - Demo queries that do not and do use indexes
          ```js
          db.restaurants.find( { "borough": "Manhattan" } ).explain()
          db.restaurants.find( { "cuisine": "Italian" } ).explain()
          ```
    - Interacting with Mongo in Node
      ```js
      var MongoClient = require('mongodb').MongoClient;

      var uri = 'mongodb://localhost:27017/test';

      MongoClient.connect(uri, function(error, db) {
        if (error) {
          console.log('SOMETHING WENT WRONG: ', error);
        }

        console.log('CONNECTED TO SERVER');
        aggregate(db, function(docs) {
          console.log(docs.length);
          db.close();
        });
      });

      function aggregate(db, callback) {
        var collection = db.collection('restaurants');

        collection.aggregate([{ $group: { "_id": "$borough", "count": { $sum: 1 } } }])
        .toArray(function(err, docs) {
          console.log(docs)
          callback(docs);
        });
      }
      ```
