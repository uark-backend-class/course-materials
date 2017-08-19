# Exercise 1

- Create a new project directory for today's exercises.
- Create a new javascript file in the project directory
  - In this file:
    - Create a module that will take an array of numbers and a number. The module should return the the numbers before and after the first instance of the number in the array.
    - Example:
      - Given `45` and `[62,89,56,45,12,91,81]`, `[56, 12]` would be returned
      - Given `62`, `[81, 89]` would be returned
      - Given `81`, `[91, 62]` would be returned
- Create another file that calls the module with an array of numbers and a single number and logs the answers to the console.

# Exercise 2

- In the project directory, create a new folder.
- In this new folder, create a new javascript file.
  - In this file:
    - Create a module named `fileIO`. This module should:
      - Have a function that creates files and returns the contents of the file
      - Have a function that reads a file and returns the content of the file
      - Have a function that appends to a file and returns the contents of the file
      - Have a function that deletes a file and returns a successful message when completed
- Create another file that imports this new module
  - In this file, create an Http server that when called:
    - Creates a file, appends a message to it, then returns the read result of this file when an Http request is made to the server
- Make a request to your http server

# Exercise 3

- In the project directory, create a new folder
- In this new folder, create a new javascript file
  - In this file:
    - Create an event emitter which have `on` and `emit` as functions
- Create another file in the project folder
  - In this file:
    - Import the event emitter and use it to create 2 different events and respond to them.
