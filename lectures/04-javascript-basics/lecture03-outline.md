- Variable names have nothing to do with the operations calculating the result of the variable
- More thorough review of the data types
  - Number
    ```js
    var a = parseInt('34');
    var b = parseInt('-5');
    var c = parseInt('0000000031');
    var d = parseInt('        2');
    var e = parseInt('45andastringvalue');
    var f = parseInt('astringvalueand45');
    var g = parseInt('4.5')
    var h = parseInt('0.9');
    var i = parseFloat('4.5');
    var j = parseFloat('4');

    console.log(j);
    console.log(Number.isNaN(j));
    ```
  - String
    ```js
    // Obviously this won't work
    /*
    var badString = 'this is one line
    this is another line';
    */

    var a = 'Example \n String';
    var b = 'Example \t String';
    var c = 'Example \r String';
    var d = 'Example \\ String';
    var e = 'Example \' String';
    var f = "Example \" String";
    var g = '"Example String"';
    var h = "'Example String'";
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    ```
  - Array
    ```js
    var fruit = ['apple', 'orange', 'banana'];

    console.log(fruit.length);
    console.log(fruit[0].length);
    console.log(fruit.indexOf('orange'));
    console.log(fruit.indexOf('papaya'));
    console.log(Array.isArray(fruit));

    var lastFruit = fruit.pop();
    console.log(lastFruit);
    console.log(fruit);

    fruit.push('mango');
    console.log(fruit);

    fruit.reverse();
    console.log(fruit);

    var firstFruit = fruit.shift();
    console.log(firstFruit);
    console.log(fruit);

    fruit.sort();
    console.log(fruit);

    fruit.splice(2, 0, 'kiwi');
    console.log(fruit);

    fruit.splice(2, 2);
    console.log(fruit);

    var fruitLength = fruit.unshift('pear');
    console.log(fruitLength);
    console.log(fruit);

    console.log(fruit.join());
    console.log(fruit.join('-'));
    console.log(fruit.join(' '));

    var numbers = [5, 67, 8, 34, 2, 7, 8];

    console.log(numbers);
    numbers.sort();
    console.log(numbers);

    ```
  - Object
    ```js
    var customer = {
      'firstName' : 'Sam',
      'lastName' : 'White',
      'age' : 30,
      'mailingAddress' : {
        'houseNumber' : 123,
        'streetName' : 'Main St',
        'city' : 'Bentonville',
        'state': 'AR',
      },
      'phoneNumber' : '479 555 5555',
      'listOfPets' : ['Fluffy', 'Mittens']
    };

    console.log(customer.hasOwnProperty('mailingAddress'));
    console.log(customer.hasOwnProperty('listOfFruits'));

    console.log(customer.propertyIsEnumerable('mailingAddress'));

    console.log(customer.toString());

    console.log(customer.valueOf());
    ```
- Debugging
  - What's a stack trace?
    ```js
    try {
      throw new Error('OH NOES!');
    } catch (err) {
      console.log(err.stack);
    }
    ```
- ES5 `var` vs ES6 `let` and `const`
  - `var`
    - old ES5 version, no longer explicit
    - should not be used
  - `let`
    - variable can be reassigned
  - `const`
    - variable cannot be reassigned
      - if object properties can be modified removed and added
      - if array, elements can be can be modified removed and added
- Conditionals
  - If
    ```js
    const a = -3;
    const b = 5;

    if (a < 0 && b > 0) {
      console.log('a is less than zero and b is greater than 0');
    }
    ```
  - If Else
    ```js
    const a = 2;

    if (a === 1) {
      console.log('a is 1');
    } else if (a === 2) {
      console.log('a is 2');
    } else if (a === 3) {
      console.log('a is 3');
    } else if (a === 4) {
      console.log('a is 4');
    } else if (a === 5) {
      console.log('a is 5');
    } else {
      console.log('a is less than 0 or greater than 3');
    }
    ```
  - Switch
    ```js
    const a = 3;

    switch (a) {
      case 1:
        console.log('a is 1');
        break;
      case 2:
        console.log('a is 2');
        break;
      case 3:
        console.log('a is 3');
        break;
      case 4:
        console.log('a is 4');
        break;
      case 5:
        console.log('a is 5');
        break;
      default:
        console.log('a is none of these');
        break;
    }
    ```
- Loops
  - For
    ```js
    const fruits = ['apple', 'orange', 'banana'];
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }

    const twoDArray = [
      [1, 2, 3],
      [4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13]
    ];

    for (let i = 0; i < twoDArray.length; i++) {
      for (let j = 0; j < twoDArray[i].length; j++) {
        console.log(twoDArray[i][j]);
      }
    }
    ```
  - For In
    ```js
    var apple = {
    	'color': 'red',
    	'type': 'Pink Lady',
    	'size': 'medium'
    };

    for (property in apple) {
      console.log(property + ' : ' + apple[property]);
    }

    // preferred way of referencing a property you know the name of
    console.log(apple.type);

    // valid but not preferred
    console.log(apple['type']);
    ```
  - While
    ```js
    let i = 0;

    while (i < 5) {
      console.log(i);
      i++;
    }

    let isSomethingTrue = true;

    while (isSomethingTrue) {
      // logic here
      console.log('in true false loop');
      isSomethingTrue = false;
    }

    console.log('after while loop');
    ```
  - Do While
    ```js
    let isSomethingTrue = false;

    do {
      console.log('in do while loop');
    } while (isSomethingTrue);
    ```
