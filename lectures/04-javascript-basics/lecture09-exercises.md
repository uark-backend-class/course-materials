# Lecture 9 - JavaScript Basics: Exercises

## Exercise 1
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

So

```js
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);
```
should return

```js
'found the needle at position 5'
```

## Exercise 2
The best way to have a productive day is to plan out your work schedule. Given the following three inputs, create an an array of time allotted to work, broken up with time allotted with breaks:

- Input 1: Hours - Number of hours available to you to get your work done!
- Input 2: Tasks - How many tasks you have to do throughout the day
- Input 3: Duration (minutes)- How long each of your tasks will take to complete

Criteria to bear in mind:

- Your schedule should start with work and end with work.
- It should also be in minutes, rounded to the nearest whole minute.
- If your work is going to take more time than you have, return "You're not sleeping tonight!"

```js
console.log(dayPlan(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
console.log(dayPlan(3, 5, 60));   // 'You're not sleeping tonight!'
console.log(dayPlan(2, 2, 60));   // [60, 0, 60]
```

## Exercise 3

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:
```js
console.log(highAndLow("1 2 3 2 5")); // return "5 1"
console.log(highAndLow("1 2 7 4 5")); // return "7 1"
console.log(highAndLow("1 9 3 4 8")); // return 9 1"
```

## Exercise 4

We know the population for a small town at the beginning of a year. The population regularly increases by a certain percent per year and moreover a given number of new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to a population goal? Write this function.

it should accept the following arguments: current population, growth percentage, incoming residents, population goal

Example:
```js
console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94
```