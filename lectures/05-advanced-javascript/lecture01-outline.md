- Strict Mode
  - Eliminates some JavaScript silent errors by changing them to throw errors
  - Makes it impossible to accidentally create global variables
    ```js
    'use strict';

    let person;

    // this is a typo where we try to set person equal to some value
    persom = {name: 'Joe'};
    ```
  - Assignments which would otherwise silently fail to throw an exception
    ```js
    'use strict';

    let demoObject = {};
    Object.defineProperty(demoObject, 'x', { value: 42, writable: false });
    demoObject.x = 9; // throws a TypeError

    console.log(demoObject);
    ```
  - Makes attempts to delete undeletable properties throw where before the attempt would simply have no effect
    ```js
    'use strict';

    delete Object.prototype;
    ```
  - Requires function parameters to be unique
    ```js
    'use strict';

    function sum(a, a, c) {
      return a + a + c;
    }

    console.log(sum(1, 2, 3));
    ```
- Hoisting
  - What is it?
    - Function declaration definitions are assigned at the beginning of the JS compilation, therefore it's possible to call (invoke) a function before it's actually defined. Hoisting only moves the declaration. The assignments are left in place.
      ```js
      'use strict';

      demoFunction();

      function demoFunction() {
        console.log('This is a function that does things');
      }
      ```
    - Major difference between `var` and `let`
    ```js
    'use strict';

    a = 5;
    console.log(a);
    var a;
    ```
    ```js
    'use strict';

    a = 5;
    console.log(a);
    let a;
    ```
    ```js
    'use strict';
    a = 5;
    console.log(a);
    ```
    ```js
    'use strict';

    var exampleFunction;

    exampleFunction();

    exampleFunction = function () {
      console.log('this is an example function');
    };
    ```
  - Why is it important?
    - Code organization
    - Understanding what is happening to our code on under the hood inside the JavaScript engine
- Closures
  - When a function remembers the scope in which it was defined, even if the function is being executed outside its original scope
  ```js
  function globalFunction() {
  	const a = 7;

  	function innerFunction() {
  		console.log(a);
  	}

  	return innerFunction;
  }

  const assignedFunction = globalFunction();

  assignedFunction();
  ```
  ```js
  let variableFunction = function() {
    console.log('this is a variable function');
  };

  function firstGlobalFunction() {
    const a = 7;

    function innerFunction() {
      console.log(a);
    }

    variableFunction = innerFunction;
  }

  function secondGlobalFunction() {
    variableFunction();
  }

  firstGlobalFunction();
  secondGlobalFunction();
  ```
- IIFE
  - What is it?
    - Immediately Invoked Function Expression
      - It executes immediately after it’s created.
      - Syntax: two ways to declare an IIFE:
      ```js
      (function() {

      }());
      ```
      ```js
      (function() {

      })();
      ```
    - Why?
      - Creates modules where variable names don't pollute the global namespace (i.e. we don't have variable name conflicts)
      ```js
      (function() {
        var a = 5;
        console.log('a in IIFE: ', a);
      })();
      console.log('a outside of IIFE: ', a);
      ```
