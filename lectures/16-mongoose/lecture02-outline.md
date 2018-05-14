
# Mongoose
  - Setup
    - Follow all instructions for the Puppy database in [lecture 1](./lecture01-notes.md)
    - Be sure to keep the age field when refactoring the code and splitting the functionality into different files.
  - Read
    - Find
      ```js
      Puppy.find({ likes: 'snacks' }).exec().then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });

      Puppy.find({ likes: 'napping' }).exec().then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find One
      ```js
      Puppy.findOne({ name: 'Sprinkles' }).exec().then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find By ID
      ```js
      Puppy.findById('ID_HERE').then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function(err) {
        console.log(err);
        mongodb.disconnect();
      })
      ```
  - Read Exercise
    - Create a new database called pets
    - Write a node script that will import all the puppies in the provided list into the database using Mongoose
      - Hint: Use Mongoose's `insertMany` method. Look up implementation info in their documentation
    - Create a small Express application that will return all the puppies from the database from a GET request
  - Querying
    - Query Syntax
      - Individual
        ```js
        var query = Puppy.find({ 'breed' : 'Dalmatian' });
        query.select('name age likes');
        query.limit(3);
        query.sort({ age: -1 });
        query.exec().then(function (result) {
          console.log(result);
          mongodb.disconnect();
        }).catch(function (err) {
          console.log(err);
          mongodb.disconnect();
        });
        ```
      - Chaining
        ```js
        Puppy.find({ breed: 'Dalmatian' }).where('age').gt(2).sort({ age: -1 }).limit(2).exec().then(function(result) {
          console.log(result);
          mongodb.disconnect();
        }).catch(function(err) {
          console.log(err);
          mongodb.disconnect();
        });
        ```
  - Update
    - Find then Update
      ```js
      Puppy.findById('ID_HERE').then(function (puppy) {
        console.log(puppy);
        puppy.age = 4;
        return puppy.save();
      }).then(function (result) {
        console.log (result);
        mongodb.disconnect();
      }).catch(function(err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find One and Update
      ```js
      Puppy.findOneAndUpdate({ breed: 'Dalmatian' }, { breed: 'Beagle' }).then(function (result) {
        return Puppy.findOne({ breed: 'Beagle' });
      }).then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find By ID and Update
      ```js
      Puppy.findByIdAndUpdate('ID_HERE', { age: 5 }).then(function (result) {
        console.log(result);
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
  - Delete
    - Find then Delete
      ```js
      Puppy.findById('ID_HERE').then(function (puppy) {
        console.log(puppy);
        return puppy.remove();
      }).then(function() {
        console.log('removed');
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find One and Delete
      ```js
      Puppy.findOneAndRemove({ breed: 'Dalmatian' }).then(function () {
        console.log('removed');
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
    - Find By ID then Delete
      ```js
      Puppy.findByIdAndRemove('ID_HERE').then(function () {
        console.log('removed');
        mongodb.disconnect();
      }).catch(function (err) {
        console.log(err);
        mongodb.disconnect();
      });
      ```
  - Multiple Collections
    - Setup
      - Create a new database called library
      - Create a new node project
    - Author
      ```js
      var mongoose = require('mongoose');

      var authorSchema = mongoose.Schema({
        firstname: String,
        lastname: String,
        books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
      });

      module.exports = mongoose.model('Author', authorSchema);
      ```
    - Book
      ```js
      var mongoose = require('mongoose');

      var bookSchema = mongoose.Schema({
        title: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
      });

      module.exports = mongoose.model('Book', bookSchema);
      ```
    - Index
      - Create Author
        ```js
        function saveAuthor() {
          var shirleyJackson = new Author({
            firstname: 'Shirley',
            lastname:  'Jackson'
          });

          shirleyJackson.save().then(function (result) {
            console.log(result);
            mongodb.disconnect();
          }).catch(function (err) {
            throw err;
            mongodb.disconnect();
          });
        }

        saveAuthor();
        ```
      - Create Book
        ```js
        function saveBook() {

          Author.find({ firstname: 'Shirley', lastname: 'Jackson' }).exec().then(function (authorResult) {
            console.log(authorResult);
            var shirleyJackson = authorResult[0];
            var weHaveAlways = new Book({
              title: 'We Have Always Lived in the Castle',
              author: shirleyJackson._id
            });

            return weHaveAlways.save();
          }).then(function (bookResult) {
            console.log(bookResult);
          }).catch(function (err) {
            console.log(err);
          });
        }

        saveBook()
      ```
    - Udpate Author to Add Book
      ```js
      var bookFetched;
      Book.find({ title: 'We Have Always Lived in the Castle' }).exec().then(function (bookResult) {
        bookFetched = bookResult[0];
        return Author.find({ firstname: 'Shirley', lastname: 'Jackson' }).exec();
      }).then(function (authorResult) {
        var author = authorResult[0];
        author.books.push(bookFetched._id);
        return author.save();
      }).then(function (saveResult) {
        console.log(saveResult);
      }).catch(function (err) {
        console.log(err);
      });
      ```
    - Find Info
        ```js
        Book.find({ title: 'We Have Always Lived in the Castle' }).exec().then(function(result) {
          console.log(result);
        }).catch(function(err) {
          console.log(err);
        });
        ```
        ```js
        Book.find({ title: 'We Have Always Lived in the Castle' }).populate('author').exec().then(function(result) {
          console.log(result);
        }).catch(function(err) {
          console.log(err);
        });
        ```
  - Multiple Collections Express Exercise
