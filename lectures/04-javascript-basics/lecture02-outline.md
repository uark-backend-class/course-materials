# Operators
- Unary
  ```js
  let x = 3;
  let y = -5;
  console.log(-x);
  console.log(-y);
  ```
- Arithmetic
  ```js
  let addition = 4 + 5;
  let subtraction = 6 - 2;
  let multiplication = 3 * 7;
  let division = 12 / 4;


  let modulo = 12 % 5;
  console.log(modulo);
  ```
- Assignment
  ```js
  let x = 12;
  let y = 3;

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
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x == y);
    console.log(x == z);
    console.log(x == '3');
    ```
  - Inequality
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x != y);
    console.log(x != z);
    console.log(x != '3');
    console.log(x != '5');
    ```
  - Strict Equality
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x === y);
    console.log(x === z);
    console.log(x === '3');
    ```
  - Strict Inequality
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x !== y);
    console.log(x !== z);
    console.log(x !== '3');
    console.log(x !== '5');
    ```
  - Greater Than
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x > z);
    console.log(z > x);
    console.log('d' > 'a');
    console.log('a' > 'd');
    ```
  - Less Than
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x < z);
    console.log(z < x);
    console.log('d' < 'a');
    console.log('a' < 'd');
    ```
  - Greater Than or Equal To
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x >= y);
    console.log(x >= z);

    let a = false;
    let b = true;

    console.log(a > b);
    console.log(b > a);
    ```
  - Less Than or Equal To
    ```js
    let x = 3;
    let y = 3;
    let z = 5;

    console.log(x <= y);
    console.log(x <= z);

    let a = false;
    let b = true;

    console.log(a < b);
    console.log(b < a);
    ```
- Logical
  - And (&&)
    ```js
    let x = 3;
    let y = 3;
    let z = 5;
    let a = 12;

    console.log((z > x) && (z > y));
    console.log((z > x) && (z > a));
    console.log((a > y) && (z > x) && (x === y));
    ```
  - Or (||)
    ```js
    let x = 3;
    let y = 3;
    let z = 5;
    let a = 12;

    console.log((x > a) || (x === y));
    console.log((x > a) || (a === z));
    console.log((z > x) || (z > y) || (x === y));
    ```
  - Not (!)
    ```js
    let x = 3;
    let y = 3;
    let z = 5;
    let a = 12;
    let c = 0;
    let b = true;

    console.log(!b);
    console.log(!c);
    console.log(!((x > a) || (x === y)));
    ```
  - Combination
    ```js
    let x = 3;
    let y = 3;
    let z = 5;
    let a = 12;
    let b = 5679483;
    let c = 0;

    console.log( (x < a) && ( (a > b) || (z > y) ) );
    console.log( (x < a) && (a > b) || (z > y) );
    console.log( (x < a) && (a > b) || (z === y) );
    ```

# Data Types
- Primitives
  - Undefined
    ```js
    let a;
    console.log(a);
    console.log(typeof a);
    ```
  - Null
    ```js
    let a;
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
    let a = true;
    let b = (5 > 2);
    ```
  - Number
    ```js
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.LN2);

    console.log(10 / 0);

    let a = '3';
    let b = '1.3';
    let name = 'A string can be a sentence';

    let z = Number.parseInt(a);
    let y = Number.parseFloat(b);
    let x = Number.parseInt(name);
    ```
  - String
    ```js
    let name = 'A string can be a sentence';
    ```
- Complex
  - Arrays
    ```js
    let arrayOfName = ['Sam', 'Jenny', 'Matt', 'Archimedes'];
    console.log(arrayOfName[3]);

    let mixedArray = [4, 'Sam', 6, 34, 'Jenny'];
    console.log(mixedArray);

    let twoDimensionalArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let twoDimensionalMixedArray = [
      ['One', 'Two', 'Three'],
      [4, 'Five', 6],
      [7, 8, 'Nine']
    ];

    console.log(twoDimensionalMixedArray[1][2]);
    ```
  - Objects
    ```js
    let demoObject = {
      property1: 'property value'
    };

    let customer = {
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

    let customer2 = {
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

    let person = {
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
