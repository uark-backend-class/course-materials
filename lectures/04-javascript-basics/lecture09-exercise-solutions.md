# Lecture 9 - JavaScript Basics: Exercise Solutions

## Exercise 1
```js
let haystack = ['hay', 'junk', 'needle', 'hay', 'moreJunk', 'hay', 'randomJunk'];


function findNeedle(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'needle') {
            return 'found the needle at position ' + i;
        }
    }
}

console.log(findNeedle(haystack));
```

## Exercise 2

### Text solution

function dayPlan (hours, tasks, duration) {
    overall goals:
    create array to store my plan
    alternate between work time and break time
    start and end with work
        number of breaks will be number of tasks - 1
        number of items in my plan will be number of tasks + number of breaks


    determine total minutes I will be working (hours * 60)
    determine total work time (tasks * duration)
    determine remaining time after completing all tasks (total time - work time)
    determine break time (remainingTime / number of breaks) (start and end with work, one fewer break than tasks)
    determine how many items will be in my plan (number of tasks + number of breaks)
    create an array to store my plan

    if my remaining time is less than 0, print something out

    loop for a number of iterations equal to plan length
        for each iteration
            if i is odd (1st, 3rd, 5th, etc)
                push duration onto my plan array
            else
                push break time onto my plan array

    return plan array

}

### Code Solution

```js
function dayPlan (hours, tasks, duration) {
  var remainingTime = (hours * 60) - (tasks * duration);
  var breakTime = Math.round(remainingTime / (tasks - 1));
  var arrayLength = tasks + (tasks - 1);
  var schedule = [];

  if (remainingTime < 0) {
    return "You're not sleeping tonight!";
  }

  for (var i = 1; i <= arrayLength; i++) {
    if (i % 2 === 1) {
      schedule.push(duration);
    } else {
      schedule.push(breakTime);
    }
  }
  return schedule;
}
```

## Exercise 3

### Text Solution

function highAndLow(stringOfNums) {
    split string into array
    make new variable called highest
    make new variable called lowest

    loop through array
        if highest is less than current number
            set highest equal to current number
        if lowest is greater than current number
            set lowest to equal current number
    
    return highest and lowest
}

### Code Solution

```js
function highAndLow(stringOfNums) {
    numArray = stringOfNums.split(" ");
    let highest = 0;
    let lowest = 10;

    for (let i = 0; i < numArray.length; i++) {
        if (highest <= numArray[i]) {
            highest = numArray[i];
        }

        if (lowest >= numArray[i]) {
            lowest = numArray[i];
        }
    }

    return highest + " " + lowest;
 
}

console.log(highAndLow("1 2 3 2 5")); // return "5 1"
console.log(highAndLow("1 2 7 4 5")); // return "7 1"
console.log(highAndLow("1 9 3 4 8")); // return 9 1"
```

## Exercise 4

make counter for number of years
make variable for total population (initially equaly to beginning population)
convert percent from provided number to decimal

loop as long as total population < target population
    total population increase by total population * percent and increase
    increment number of year counter

return number of years


```js
function howManyYears(beginningPopulation, percent, increase, targetPopulation) {
  var numberOfYears = 0;
  var totalPopulation = beginningPopulation;
  var convertedPercent = percent / 100;

  while (totalPopulation < targetPopulation) {
    totalPopulation = totalPopulation + (totalPopulation * convertedPercent) + increase;
    numberOfYears++;
  }

  return numberOfYears;
}

console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94
```