# Lecture 10 - JavaScript Basics: Exercise Solutions

## Exercise 1

function findOldest(developerArray) {
  let oldest = developerArray.reduce(function(currentOldest, contender) {
    if (contender.age >= currentOldest[0].age) {
      if (contender.age != currentOldest[0].age) {
        currentOldest.length = 0;
      }
      currentOldest.push(contender);
      return currentOldest;
    }
    else {
      return currentOldest;
    }
  }, [ { age: 0 } ]);

  return oldest;
}

## Exercise 2

Not provided at this time.