# Exercises

## Exercise 1

- Create an Express application
- It should have 2 routes:
  - GET /
    - Returns a string
  - GET /countdown/:number
    - Counts from `:number` to 0 at 1second intervals
    - When it reaches 0, a string is sent back containing a message and the amount of time it took to countdown to 0
  - Using the Bunyan documentation (https://github.com/trentm/node-bunyan), install `bunyan` and add it to your project
  - Add a Bunyan log when the app is started that displays what port the application is listening on
