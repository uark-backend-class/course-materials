# Lecture 8 - JavaScript Basics: Exercise Solutions

## Exercise 1

```js
// Manual Solution
function repeatString(numberOfReps, stringToRepeat) {
  let repeatedString = stringToRepeat;

  for (let i = 1; i < numberOfReps; i++) {
    repeatedString += stringToRepeat;
  }

  return repeatedString;
}
```

```js
// Fancy Pants String Operation Solution
function repeatString(numberOfReps, stringToRepeat) {
  return stringToRepeat.repeat(numberOfReps);
}
```

## Exercise 2

```js
// Manual Solution
function maxRedigit(num) {

  if (num < 100 || num > 999) {
    return null;
  }

  const numString = num.toString();
  const numArray = numString.split('');
  const maxIndex = findMaxIndex(numArray);
  const minIndex = findMinIndex(numArray);
  const midIndex = findMidIndex(maxIndex, midIndex);
  const answerArray = [];
  let answerString;

  answerArray[0] = numArray[maxIndex];
  answerArray[1] = numArray[midIndex];
  answerArray[2] = numArray[minIndex];
  answerString = answerArray.join('');

  return parseInt(answerString, 10);
}

function findMaxIndex(numArray) {
  let maxIndex = 0;

  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > numArray[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

function findMinIndex(numArray) {
  let minIndex = 0;

  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] < numArray[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

function findMidIndex(maxIndex, minIndex) {
  let midIndex;

  if (maxIndex === 0 && minIndex === 1) {
    midIndex = 2;
  } else if (maxIndex === 0 && minIndex === 2) {
    midIndex = 1;
  } else if (maxIndex === 1 && minIndex === 0) {
    midIndex = 2;
  } else if (maxIndex === 1 && minIndex === 2) {
    midIndex = 0;
  } else if (maxIndex === 2 && minIndex === 0) {
    midIndex = 1;
  } else if (maxIndex === 2 && minIndex === 1) {
    midIndex = 0;
  } else if (maxIndex === minIndex) {
    midIndex = 1;
    maxIndex = 2;
  }

  return midIndex;
}
```
```js
// Array Operation Solution
function maxRedigit (num) {
  if (num < 100 || num > 999) {
    return null;
  }

  const numString = num.toString();
  const numArray = numString.split('');
  numArray.sort().reverse();
  const answerString = numArray.join('');

  return parseInt(answerString, 10);
}
```


## Exercise 3
```js
// While Loop
function removeTargetSum(nums, target) {
  let i = 0;
  let removed = false;

  while (i < nums.length - 1) {
    if (nums[i] + nums[i + 1] === target) {
      nums.splice(i + 1, 1);
      removed = true;
    }

    if (!removed) {
      i++
    }

    removed = false;
  }

  return nums;
}
```
```js
// For Loop
function removeTargetSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums;
}
```
