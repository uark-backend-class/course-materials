# Exercise 1

Create an `http` server that does the following
- Reads the port that it should bind to from a configuration file (using fs.readFileSync)
- On each request, do the following
    - Create an empty text file
    - Append some message to that text file
    - Read the contents of that text file into a variable
    - Write the contents of that text file to the server response

Make sure to do all of the above (with the exception of the port configuration)
using asynchronous file system methods.
This should give you a good example of how to chain callbacks together.

# Exercise 2

Modify the previous `http` server exercise to accomplish the same thing with promises.
I've provided a module that implements the required `fs` calls to return promises rather than accept callbacks.
This is an example of how to chain promises together to accomplish the same thing, but in a much easier to read and maintain manner.


_module.js_
```js
let fs = require('fs');



let fsModule = {
    createFile: createFile,
    appendFile: appendFile,
    readFile: readFile
};

function createFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, '', (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

function appendFile(fileName, fileContents) {
    return new Promise(function(resolve, reject) {
        fs.appendFile(fileName, fileContents, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
}

function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', (err, fileData) => {
            if (err) {
                return reject(err);
            }
            return resolve(fileData);
        });
    });
}

module.exports = fsModule;
```

# Exercise 3

Create a module that implements the following function
- Multiply: this function should accept two numbers and return a promise that resolves the two values multiplied together.

Update your previous `http` server to call this `Multiply` function 5 times and waits for all of the promises to resolve before responding with all of results.
