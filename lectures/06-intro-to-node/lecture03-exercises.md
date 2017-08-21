# Exercise 1

- Create a new project javascript file
- In this file, create a function that accepts a callback, logs some text to the console, and then executes the provided callback
- Invoke the function, and provide a callback that logs some other text to the console.

# Exercise 2

- Create a new project javascript file
- In this file, create two functions. One called slowFunction that calls setTimeout with a delay and then logs 'Slow' to the console. The second function should be called fastFunction and calls setTimeout with a delay and then logs 'Fast' to the console.
- You should invoke slowFunction before fastFunction, but your console output should be

    'Fast'
    'Slow'

# Exercise 3

- Create a new project javascript file
- Create a text file in the same directory with your name as contents of this text file.
- Create a program that reads the contents of the text file, prints the contents of the text file, and then prints
the message 'DONE READING FILE' to the console.
- Make sure to use the Asynchronous `fs.readFile` method

# Exercise 4

- Create a new project javascript file
- Create an `http` server in this file that listens on port 3000
- Create a text file in this same directory with the contents `Hello World!`
- Use fs.readFile (NOT readFileSync) to read your file and display it when you visit your server from a browser.
