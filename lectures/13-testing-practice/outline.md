# Testing Practice

- Unit Testing
  - Unit testing is about testing small units of code, usually a single function or method, in isolation.
- Test Driven Development
  - Test Driven Development relies upon unit testing as the entryway to new feature development.
- Test Driven Development Process
  1. Add a test.
  2. Run all current tests to validate that new test fails.
  3. Write code relevant to test (feature being developed).
  4. Run tests.
  5. Refactor code.
  - Repeat for new functionality
- Testing Best Practices
  - Test as much functionality of your code as possible
  - Write code in a manner that is easy to test single pieces of functionality
    - Think about scope when you write testable functions.
    - For example the following is not easily testable code because it requires too much setup.
    ```js
    let greeting = 'Hello ';
    let name = 'Spruce';

    let updateGreeting = function () {
        greeting = greeting + name;
        return greeting;
    };
    ```
    - This code is difficult to test because the function is not isolated, and it requires setup before you can invoke it.
    - A much easier to test function would be something like:
    ```js
    let updateGreeting = function(greeting, name) {
        if (!typeof greeting === 'string' || !typeof name === 'string') {
            throw new Error('invalid parameters');
        }
        return greeting + name;
    };
    ```
- What to test?
  - Is your function defined?
  - Does your function return the correct output when you provide the correct input?
  - Does your function correctly handle the incorrect input?
    - For example, does your function check to make sure the input is the correct type of data and return an error if it is not?
  - Does your function correctly handle undefined input?
  - For the above `updateGreeting` function we probably want to test the following:
    - Is it a function
    - Does it provide the correct output ('Hello Spruce') when we provide the correct input?
    - Does it throw the correct error when input is invalid?
    - Does it throw the correct error when input is undefined?
