- Scope
  - What is scope?
    - Scope is the set of rules used to determine which variables and functions a particular part of your program has access to.
    - Global Scope
        - Anything created in the global namespace (i.e. `const a`)
        ```js
        const a = 5;

        console.log('a in global scope before: ', a);

        function myFunction() {
          console.log('a in function scope: ', a);
        }

        myFunction();

        console.log('a in global scope after: ', a);
        ```
    - Local Scope
      - Some things in JavaScript create their own isolated scope (loops, functions)
      - Unlike loops or functions, block statements such as if and else do not create new scope
      - This scope has access to the outer levels of scope, however outer levels do not have access to the inner local scope
        - Loops
          - Variables created inside of loops are not accessible outside of the loop
            - This will cause an error as we try to reference `currentNumber` outside the loop it was initialized in
              ```js
              const arrayOfNumbers = [1, 8, 5, 12, 4, 7, 1, 34, 5];

              for (let i = 0; i < arrayOfNumbers.length; i++) {
                const currentNumber = arrayOfNumbers[i];
                console.log('current number in loop: ', currentNumber);
              }

              // causes an error because no variable named currentNumber is available on the global scope
              console.log('current number after loop: ', currentNumber);
              ```
            - If we want to use data processed inside the loop, the variables storing it must be initialized before the loop
              ```js
              const arrayOfNumbers = [1, 8, 5, 12, 4, 7, 1, 34, 5];

              let sum = 0;
              for (let i = 0; i < arrayOfNumbers.length; i++) {
                const currentNumber = arrayOfNumbers[i];
                sum += currentNumber;
                console.log('current number in loop: ', currentNumber);
                console.log('sum in loop: ', sum);
              }

              console.log('sum after loop: ', sum);
              ```
        - Functions
          - All logs of `a` are the same because there is not a definition of `a` inside `myFunction`, so it looks to the global scope
          ```js
          const a = 5;

          console.log('a in global scope before: ', a);

          function myFunction() {
            console.log('a in function scope: ', a);
          }

          myFunction();

          console.log('a in global scope after: ', a);
          ```
          - The nearest scope takes precedence thus inside `myFunction`, `a` will log as 12
            ```js
            const a = 5;

            console.log('a in global scope before: ', a);

            function myFunction() {
              const a = 12;
              console.log('a in function scope: ', a);
            }

            myFunction();

            console.log('a in global scope after: ', a);
            ```
          -
            ```js
            let a = 5;

            console.log('a in the global scope before function call: ', a);

            function myFunction() {
              const a = 12;
              console.log('a in the function scope: ', a);

              return a;
            }

            a = myFunction();

            console.log('a in the global scope after function call: ', a);
            ```
          - However, things created in local scopes are not available to the outer scope
            ```js
            const a = 5;

            console.log('a in global scope before: ', a);

            function myFunction() {
              const b = 12;
              console.log('a in function scope: ', a);
              console.log('b in function scope ', b);
            }

            myFunction();

            console.log('a in global scope after: ', a);
            // causes an error as global does not have access to a variable named b
            console.log('b in global scope: ', b);
            ```
          - It nests, `myInnerFunction` can reference the scope of `myFunction` as well as the global scope
            ```js
            const a = 5;

            console.log('a in global scope before: ', a);

            function myFunction() {
              const b = 12;
              console.log('a in function scope: ', a);

              function myInnerFunction() {
                const sum = a + b;
                console.log('addition in inner function scope: ', sum);
              }

              myInnerFunction();
            }

            myFunction();

            console.log('a in global scope after: ', a);
            ```
          - Like variables, functions also only exist in their scope - global does not have access to `myInnerFunction`
            ```js
            const a = 5;

            console.log('a in global scope before: ', a);

            function myFunction() {
              const b = 12;
              console.log('a in function scope: ', a);

              function myInnerFunction() {
                const sum = a + b;
                console.log('addition in inner function scope: ', sum);
              }

              myInnerFunction();
            }

            myFunction();

            console.log('a in global scope after: ', a);

            // will cause an error
            myInnerFunction();
            ```
          - If we move `myInnerFunction` to the global scope, it creates its own unique local scope each time it is run
            ```js
            const a = 5;
            const b = 12;

            console.log('a in the global scope before function call: ', a);

            function myFunction() {
              console.log('a in the function scope: ', a);
              console.log('b in the function scope: ', b);

              myInnerFunction();
            }

            function myInnerFunction() {
              const sum = a + b;
              console.log('addition in inner function scope: ', sum);
            }

            myFunction();
            myInnerFunction();

            console.log('a in the global scope after function call: ', a);
            ```
