- Prototype and ES6 Continued
  - Last Lecture
    - Class Declarations
      ```js
      class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }

        get area() {
          return this.calcArea();
        }

        calcArea() {
          return this.height * this.width;
        }
      }
      ```
    - Class Expression
      - Unnamed
        ```js
        var Rectangle = class {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }

          get area() {
            return this.calcArea();
          }

          calcArea() {
            return this.height * this.width;
          }
        }

        const myRect = new Rectangle(10, 15);
        console.log(myRect);
        console.log(myRect.calcArea());
        console.log(myRect.area);
        ```
      - Named
        ```js
        var Rectangle = class Rectangle {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }

          get area() {
            return this.calcArea();
          }

          calcArea() {
            return this.height * this.width;
          }
        }

        const myRect = new Rectangle(10, 15);
        console.log(myRect);
        console.log(myRect.calcArea());
        console.log(myRect.area);
      ```
  - Strict Mode
    - The bodies of class declarations and class expressions are executed in strict mode by default.
  - Static Methods
    - Array Example
      ```js
      let exampleArray = [5, 6, 1, 3, 9, 2];

      // A static method is a method that's called on the prototype itself rather than an instance of the prototype
      console.log(Array.isArray(exampleArray));

      // An instance method is a method that's called on an instance of the prototype.
      console.log(exampleArray.join());
      ```
    - Prototype
      ```js
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }

        static distance(a, b) {
          const dx = a.x - b.x;
          const dy = a.y - b.y;

          return Math.hypot(dx, dy);
        }
      }

      const p1 = new Point(5, 5);
      const p2 = new Point(10, 10);

      console.log(Point.distance(p1, p2));
      ```
      - Exercise: add an instance method that accepts one point and calculates the distance between two points.
        ```js
        class Point {
          constructor(x, y) {
            this.x = x;
            this.y = y;
          }

          static distance(a, b) {
            console.log('static distance called');
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.hypot(dx, dy);
          }

          distance(b) {
            console.log('instance distance called');
            const dx = this.x - b.x;
            const dy = this.y - b.y;

            return Math.hypot(dx, dy);
          }
        }

        const p1 = new Point(5, 5);
        const p2 = new Point(10, 10);

        console.log(Point.distance(p1, p2));
        console.log(p1.distance(p2));
        ```
  - Inheritance
    - Create a base class
      ```js
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(this.name + ' makes a noise.');
        }
      }

      let socks = new Animal('Socks');
      socks.speak();
      ```
    - Use the `extend` keyword to establish inheritance
      ```js
      class Cat extends Animal {
        speak() {
          console.log(this.name + ' meows.');
        }
      }

      let thorvald = new Cat('Thorvald');
      thorvald.speak();
      ```
      - You can also use `extend` on ES5 function-style prototype definitions
        ```js
        function Animal (name) {
          this.name = name;
        }

        Animal.prototype.speak = function () {
          console.log(this.name + ' makes a noise.');
        }


        class Cat extends Animal {
          speak() {
            console.log(this.name + ' meows.');
          }
        }

        let thorvald = new Cat('Thorvald');
        thorvald.speak();
        ```
      - However, you can't use `extend` with prototypes defined as objects.
      - If the subclass has a constructor, you must first call `super()` before using `this`
        ```js
        class Rectangle {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }

          calcArea() {
            return this.height * this.width;
          }
        }

        class Square extends Rectangle {
          constructor(side) {
            super(side, side);
          }
        }

        let mySquare = new Square(5);
        console.log(mySqaure.calcArea());
        ```
    - Exercise: Rewrite Employee hierarchy in ES6 style.
      ```js
      class Employee {
        constructor(name, idNumber, department) {
          this.name = name;
          this.idNumber = idNumber;
          this.department = department;
        }
      }

      class Manager extends Employee {
        constructor(name, idNumber, department, reports) {
          super(name, idNumber, department);
          this.reports = reports;
        }
      }

      class Engineer extends Employee {
        constructor(name, idNumber, department, specialty) {
          super(name, idNumber, department);
          this.specialty = specialty;
        }

        doesLikeJavascript() {
          let statement = this.name + ' the ' + this.specialty + ' engineer ';

          if (this.specialty.toLowerCase() === 'computer') {
            statement += ' likes JavaScript.'
          } else {
            statement += ' does not like JavaScript.'
          }
          return statement;
        }
      }

      class Sales extends Employee {
        constructor(name, idNumber, department, quota) {
          super(name, idNumber, department);
          this.quota = quota;
        }

        didMeetQuota(actualSales) {
          return (actualSales >= this.quota);
        }
      }

      class EngineeringIntern extends Engineer {
        constructor(name, idNumber, department, specialty, mentor) {
          super(name, idNumber, department, specialty);
          this.mentor = mentor;
        }
      }

      let samantha = new Engineer('Samantha Jones', 123, 'Technology', 'Electrical');
      let oscar = new Engineer('Oscar Ruiz', 789, 'Technology', 'Computer');

      console.log(samantha);
      console.log(samantha.doesLikeJavascript());
      console.log(oscar);
      console.log(oscar.doesLikeJavascript());
      let jeff = new EngineeringIntern('Jeff Brown', 147, 'Technology', 'Computer', 789);
      console.log(jeff);
      console.log(jeff.doesLikeJavascript());

      let jennifer = new Manager('Jennifer Smith', 456, 'Technology', [123, 789, 147]);
      console.log(jennifer);

      let carlos = new Sales('Carlos Mendez', 258, 'Sales', 5);
      console.log(carlos);
      console.log(carlos.didMeetQuota(6));
      ```
- Recursion
  - Printing Numbers
    ```js
    function recursivePrint(num) {
      if (num === 0) {
        console.log('BOOM!');
      } else{
        console.log(num);
        recursivePrint(num - 1);
      }
    }

    recursivePrint(10);
    ```
  - Factorial
    - n! = 1 * 2 * 3 * 4 * ... * n
    - Iterative factorial
      ```js
      function factorial(n) {
        let fact = 1;

        for (let i = 2; i <= n; i++) {
          fact *= i;
        }

        return fact;
      }

      console.log(factorial(8));
      ```
    - Recursive Factorial
      ```js
      function factorial(n) {
        console.log('FACTORIAL CALLED FOR: ', n);
        if (n < 0) {
          return -1;
        }

        if (n === 0) {
          return 1;
        }

        return (n * factorial(n - 1));
      }

      console.log(factorial(8));
      ```
  - Fibonacci
    - Iterative Fibonacci
      ```js
      function fibonacci(n) {
        var a = 0;
        var b = 1;
        var f = 1;

        for(var i = 2; i <= n; i++) {
          f = a + b;
          a = b;
          b = f;
        }

        return f;
      }

      console.log(fibonacci(12));
      ```
    - Recursive Fibonacci
      ```js
      function fibonacci(n) {
        if (n <= 2) {
          return 1;
        } else {
          return fibonacci(n - 2) + fibonacci(n - 1);
        }
      }

      console.log(fibonacci(12));
      ```
  - Exercise: Calculate the Output
    ```js
    function gcd(a, b) {
      if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    }

    console.log(gcd(20, 12));
```
