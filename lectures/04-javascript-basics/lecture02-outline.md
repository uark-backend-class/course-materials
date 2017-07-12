# Operators
- Unary
  ```js
  var x = 3;
  var y = -5;
  console.log(-x);
  console.log(-y);
  ```
- Arithmetic
  ```js
  var addition = 4 + 5;
  var subtraction = 6 - 2;
  var multiplication = 3 * 7;
  var division = 12 / 4;


  var modulo = 12 % 5;
  console.log(modulo);
  ```
- Assignment
  ```js
  var x = 12;
  var y = 3;

  // x = x + y;
  x += y;

  // x = x - 5
  x -= 5;

  // y = y * 2
  y *= 2;

  // x = x / y
  x /= y;

  // x = x % 5
  x %= 5;
  ```
- Comparison
  - Equality
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x == y);
    console.log(x == z);
    console.log(x == '3');
    ```
  - Inequality
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x != y);
    console.log(x != z);
    console.log(x != '3');
    console.log(x != '5');
    ```
  - Strict Equality
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x === y);
    console.log(x === z);
    console.log(x === '3');
    ```
  - Strict Inequality
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x !== y);
    console.log(x !== z);
    console.log(x !== '3');
    console.log(x !== '5');
    ```
  - Greater Than
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x > z);
    console.log(z > x);
    console.log('d' > 'a');
    console.log('a' > 'd');
    ```
  - Less Than
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x < z);
    console.log(z < x);
    console.log('d' < 'a');
    console.log('a' < 'd');
    ```
  - Greater Than or Equal To
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x >= y);
    console.log(x >= z);

    var a = false;
    var b = true;

    console.log(a > b);
    console.log(b > a);
    ```
  - Less Than or Equal To
    ```js
    var x = 3;
    var y = 3;
    var z = 5;

    console.log(x <= y);
    console.log(x <= z);

    var a = false;
    var b = true;

    console.log(a < b);
    console.log(b < a);
    ```
- Logical
  - And (&&)
    ```js
    var x = 3;
    var y = 3;
    var z = 5;
    var a = 12;

    console.log((z > x) && (z > y));
    console.log((z > x) && (z > a));
    console.log((a > y) && (z > x) && (x === y));
    ```
  - Or (||)
    ```js
    var x = 3;
    var y = 3;
    var z = 5;
    var a = 12;

    console.log((x > a) || (x === y));
    console.log((x > a) || (a === z));
    console.log((z > x) || (z > y) || (x === y));
    ```
  - Not (!)
    ```js
    var x = 3;
    var y = 3;
    var z = 5;
    var a = 12;
    var c = 0;
    var b = true;

    console.log(!b);
    console.log(!c);
    console.log(!((x > a) || (x === y)));
    ```
  - Combination
    ```js
    var x = 3;
    var y = 3;
    var z = 5;
    var a = 12;
    var b = 5679483;
    var c = 0;

    console.log( (x < a) && ( (a > b) || (z > y) ) );
    console.log( (x < a) && (a > b) || (z > y) );
    console.log( (x < a) && (a > b) || (z === y) );
    ```

# Data Types
- Primitives
  - Undefined
    ```js
    var a;
    console.log(a);
    console.log(typeof a);
    ```
  - Null
    ```js
    var a;
    console.log(a);

    a = 5;
    console.log(a);

    a = null;
    console.log(a);

    console.log(null == undefined);
    console.log(null === undefined);
    ```
  - Boolean
    ```js
    var a = true;
    var b = (5 > 2);
    ```
  - Number
    ```js
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.LN2);

    console.log(10 / 0);

    var a = '3';
    var b = '1.3';
    var name = 'A string can be a sentence';

    var z = Number.parseInt(a);
    var y = Number.parseFloat(b);
    var x = Number.parseInt(name);
    ```
  - String
    ```js
    var name = 'A string can be a sentence';
    ```
- Complex
  - Arrays
    ```js
    var arrayOfName = ['Sam', 'Jenny', 'Matt', 'Archimedes'];
    console.log(arrayOfName[3]);

    var mixedArray = [4, 'Sam', 6, 34, 'Jenny'];
    console.log(mixedArray);

    var twoDimensionalArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    var twoDimensionalMixedArray = [
      ['One', 'Two', 'Three'],
      [4, 'Five', 6],
      [7, 8, 'Nine']
    ];

    console.log(twoDimensionalMixedArray[1][2]);
    ```
  - Objects
    ```js
    var demoObject = {
      property1: 'property value'
    };

    var customer = {
      'firstName' : 'Sam',
      'lastName' : 'White',
      'mailingAddress' : {
        'houseNumber' : 123,
        'streetName' : 'Main St',
        'city' : 'Bentonville',
        'state': 'AR',
      },
      'phoneNumber' : '479 555 5555',
      'listOfPets' : ['Fluffy', 'Mittens']
    };

    var customer2 = {
      'firstName' : 'John',
      'lastName' : 'Smith',
      'mailingAddress' : {
        'houseNumber' : 456,
        'streetName' : 'Different St',
        'city' : 'Bentonville',
        'state': 'AR',
      },
      'phoneNumber' : '479 555 6666',
      'listOfPets' : ['Archimedes']
    };

    console.log(customer2.firstName);

    var person = {
      'firstName': 'Sam',
      'lastName': 'White'
    };
    console.log(person);

    person.middleName = 'Bartholomew';
    console.log(person);
    console.log(person.hasOwnProperty('middleName'));

    person.age = 25;
    console.log(person);

    delete person['middleName'];
    console.log(person);
    console.log(person.hasOwnProperty('middleName'));

    person.age = 26;
    console.log(person);

    console.log(person.toLocaleString(person));
    ```

```
