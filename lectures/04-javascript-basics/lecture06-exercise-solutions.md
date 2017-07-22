# Exercise 1

```js
function cipher (str) {
  var upperString = str.toUpperCase();
  var newStr = [];

  for (var i = 0; i < upperString.length; i++) {
    var charCode = upperString.charCodeAt(i);
    var newCharCode = 0;
    if (charCode < 78) {
      newCharCode = 90 - (13 - (charCode - 64));
    }

    if (upperString[i] === ' ') {
      newStr.push(' ');
    } else if (newCharCode > 0) {
      newStr.push(String.fromCharCode(newCharCode));
    } else {
      newStr.push(String.fromCharCode(charCode - 13));
    }
  }
  return newStr.join('');
}

console.log(cipher('SERR CVMMN'));
console.log(cipher('LBH QVQ VG'));
```

# Exercise 2

```js
function reverseString(inputString) {
  var stringArray = inputString.split('');
  var reversedStringArray = [];

  for (var i = stringArray.length - 1; i >= 0; i--) {
    reversedStringArray.push(stringArray[i]);
  }

  var reversedString = reversedStringArray.join('');
  return reversedString;
}

console.log(reverseString('!dlroW ,olleH'));  
console.log(reverseString('tset a si sihT'));  
console.log(reverseString('!taerg si tpircsavaJ'));  
console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
console.log(reverseString('A')); 
```

# Exercise 3

```js
// Switch Statement Solution
function calculateTip(amount, rating) {
  rating = rating.toLowerCase();

  switch(rating) {
    case "terrible":
      return 0;
      break;
    case "poor":
      return Math.ceil(amount * .05);
      break;
    case "good":
      return Math.ceil(amount * .1);
      break;
    case "great":
      return Math.ceil(amount * .15);
      break;
    case "excellent":
      return Math.ceil(amount * .20);
      break;
    default:
      return "Rating not recognized";
  }
}

// If/Else Solution
function calculateTip(price, rating) {
  rating = rating.toLowerCase();
  var finalProduct = 'Rating not recognized';

  if (rating === 'terrible') {
    finalProduct = 0;
  } else if (rating === 'poor') {
    finalProduct = Math.ceil(price * .05);
  } else if (rating === 'good') {
    finalProduct = Math.ceil(price * .1);
  } else if (rating === 'great') {
    finalProduct = Math.ceil(price * .15);
  } else if (rating === 'excellent') {
    finalProduct = Math.ceil(price * .2);
  }

  return finalProduct;
}

console.log(calculateTip(20, "terrible")); //4
console.log(calculateTip(26.95, "good")); // 3
console.log(calculateTip(26.95, "kind of okay but not great")); // 3


console.log(calculateTip(20, "Excellent")); //4
console.log(calculateTip(26.95, "good")); // 3
```
