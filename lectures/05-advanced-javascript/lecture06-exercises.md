# Async Await Exercises

# Exercise 1
Create a function called tripleAfter3Seconds(number) that setTimeout and returns a promise that resolves with triple the input number after three seconds. 

# Exercise 2
Make a call to tripleAfter3Seconds and then use the ```.then``` function to repeatedly pass the output of the function call to the same function two more times.

# Exercise 3
Modify your function calls from Exercise 2 to instead use async/await. 

# Exercise 4
Install the axios library. Using axios, make a call to ```https://api.github.com/users/<your github username>```. Use await to make the call and then print the data property of the returned object.

# Exercise 5
Select three APIs and then use Promise.all with await to make all of the http calls at once.
