# Synchronous vs Asynchronous
  - Synchronous: only one process executing at a time
    - JavaScript is synchronous
    - Execution of further code won't happen until the currently executing code is complete.
    - Long-running processes can make the server (or UI feel unresponsive) until the function has returned
    - Potential for bad user experience
  - Blocking
  - Asynchronous: more than one process running simultaneously
    - Node is asynchronous, the V8 engine is not
    - While V8 is running JavaScript code, converting it to machine language and executing it, Node can do other things as well.
      - Not just let things run inside the V8 engine.
    - Use asynchronous code when performing expensive and time-consuming operations
    - Feels more responsive, especially with multiple users, which will likely be the case for backend development (Twitter, Facebook, Instagram)
  - Non-blocking
  - Thread
    - A thread is an execution context, which is all the information a CPU needs to execute a stream of instructions.
  - Synchronous vs Asynchronous
    - Synchronous
      ```js
      var result = database.query('SELECT * FROM largedatabasetable');
      console.log('Hello World');
      ```
    - Asynchronous
      ```js
      database.query('SELECT * FROM largedatabasetable', function(rows) {
       var result = rows;
       // results of database fetch are used in code here
      });
      console.log('Hello World');
      ```

# Callbacks
  - A callback is a function that is passed to another function that will be invoked at some point.
    - The function that we're running calls back, invokes, the function that it has been passed when it is done doing its work.
  - Basic function
    ```js
    function greet() {
      console.log('Hello');
    }
    ```
  - Function with a callback
    ```js
    function greet(callback) {
      console.log('Hello');
      callback();
    }

    greet(function() {
      console.log('The callback was invoked.');
    });
    ```
  - Function with multiple callbacks
    ```js
    function greet(callback) {
      console.log('Hello');
      callback();
    }

    greet(function() {
      console.log('The callback was invoked.');
    });

    greet(function() {
      console.log('A different callback was invoked.');
    });
  ```
- Function with multiple callbacks with arguments
  ```js
  function greet(callback) {
    console.log('Hello');

    var data = {
      firstname: 'Jennifer',
      lastname: 'Smith'
    };

    callback(data);
  }

  greet(function(data) {
    console.log('The callback was invoked, ' + data.firstname);
  });

  greet(function(data) {
    console.log('A different callback was invoked, ' + data.lastname);
  });
  ```
- Function with multiple parameters, including one that is a callback
  ```js
  function greet(name, callback) {
    console.log('hello ' + name + ' ');

    var fullname = {
      firstname: 'Jennifer',
      lastname: 'Smith'
    };

    callback(fullname);
  }

  greet('Spruce', function(data) {
    console.log('the callback was invoked: ', data.firstname);
  });

  greet('Brenna', function(data) {
    console.log('this is a different callback: ', data.lastname);
  });
  ```
- Callback Pattern
  - Look at [Node.js file system library docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html) for callback examples

# Asynchronous File Read Demo
  - Create javascript file
  - Create text file in same directory
  - Synchronous File Read - HAVE STUDENTS DO THIS PART
    - Valid use case might be a configuration file that needs to be read before any other code can be run
    - Buffer translates file contents to values that mean things to us
    ```js
    var fs = require('fs');

    var contents = fs.readFileSync(__dirname + '/fileexample.txt', 'utf8');
    console.log(contents);
    ```
  - Asynchronous File Read
    - In most cases, you don't want file read to be synchronous because you have many users requesting information from your server
      - We don't want each user to have to wait on all the users who requested prior
    - Per the Node docs, we can see that the callback that .readFile() expects takes two parameters, error and data, in that order
      - Error-First Callback Pattern: Callbacks that take an error object as their first parameter. If there is no error, that value is null. This is a general standard in Node.
    - The JavaScript will be running via V8 while simultaneously the underlying event loop is asking the operating system to read the contents of the file
      - The Event Loop will invoke my callback once the file read is complete
    - Add readFile() call
      ```js
      var fs = require('fs');

      var contents = fs.readFileSync('fileexample.txt', 'utf8');
      console.log(contents);

      fs.readFile('fileexample.txt', 'utf8', function(err, data) {
        console.log(data);
      });
      ```
    - Prove it is asynchronous
      - What order will the logs print?
      - Go over our code in diagram
      ```js
      var fs = require('fs');

      console.log('BEFORE ASYNC CALL');
      fs.readFile('fileexample.txt', 'utf8', function(err, data) {
        console.log('READ FILE CALLBACK');
        console.log(data);
      });
      console.log('AFTER ASYNC CALL');
      ```
    - Demonstrate errors by removing text file
      ```js
      var fs = require('fs');

      var contents = fs.readFileSync('fileexample.txt', 'utf8');
      console.log(contents);

      fs.readFile('fileexample.txt', function(err, data) {
        console.log(err);
        console.log(data);
      });
      ```

# Problems With Callbacks
  - Callback Pyramid of Doom

# SetTimeout
  - Built in function
  - Which log statement will print out first?
  ```js
  setTimeout(function() {
      console.log('waiting');
  }, 1000);

  setTimeout(function () {
      console.log('still waiting');
  }, 500)
  ```
