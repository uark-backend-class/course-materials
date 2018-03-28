- History of Node.js
  - When and why was it created?
    - Ryan Dahl / May 2009
  - Review of context - where does Node.js fit in an application?
  - What is the V8 engine?
- What's NPM ?
  - Isaac Schlueter / January 2010
  - Why is it important?
  - What are NPM modules?
    - Show examples on NPM
  - Usage
    - Initialize
    - Installing modules
      - Install latest version
        - npm install <module name>
        - npm update
      - Install specific version
        - npm install <module name>@<version number>
      - Install globally
    - Removing modules
    - Dependencies vs Dev Dependencies
- .gitignore
- How to create an HTTP server
  - Using Modules & Packages
    - Node.js standard library
  - Node.js API discovery
    - Show documentation
  - Example
    ```js
    const http = require('http');

    const server = http.createServer(function (req, res) {
      res.write('Hello from my first server!');
      res.end();
    });
    ```
- Arrow Functions
  ```js
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.write('Hello from my first server!');
    res.end();
  });
  ```
- Exercise 1
- Exercise 2
- Modules
  - Constructor Function
    index.js
    ```js
    const http = require('http');
    const myModule = require('./example-module');

    const server = http.createServer((req, res) => {
      res.write(myModule.someTextAsAString());
      res.end();
    });

    server.listen(3000);
    ```
    module.js
    ```js
    function exampleModule () {
      this.someTextAsAString = function() {
        return 'this is from an example module';
      }
    }

    module.exports = new exampleModule();
    ```
  - Exporting Function
    index.js
    ```js
    const http = require('http');
    const myModule = require('./example-module');

    const server = http.createServer((req, res) => {
      res.write(myModule());
      res.end();
    });

    server.listen(3000);
    ```
    module.js
    ```js
    module.exports = function() {
      return 'exporting function from module';
    }
    ```
  - Extend Module Exports
      index.js
      ```js
      const http = require('http');
      const myModule = require('./example-module');

      const server = http.createServer((req, res) => {
        res.write(myModule.anotherFunctionExample());
        res.end();
      });

      server.listen(3000);
      ```
      module.js
      ```js
      module.exports.anotherFunctionExample = function () {
        return 'this is a string from another function example';
      }
      ```
    - Revealing Module Pattern
    index.js
    ```js
    const http = require('http');
    const myModule = require('./example-module');

    const server = http.createServer((req, res) => {
      res.write(myModule.revealPatternExample() + ' ' +
        myModule.aDifferentExample());
      res.end();
    });

    server.listen(3000);
    ```
    module.js
    ```js
    function revealPatternExample() {
      return 'this is a revealing module pattern example';
    }

    function aDifferentExample() {
      return 'this is a different example';
    }

    var exampleModule = {
      revealPatternExample,
      aDifferentExample
    };

    module.exports = exampleModule;
    ```
