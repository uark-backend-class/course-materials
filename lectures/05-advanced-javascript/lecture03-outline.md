- Prototype
  - Terminology
    - Inheritance
      - Objects gaining access to properties (data) and methods (functions) on another object
      - Method: class/object function
    - Method
      - A function that is specifically a part of a class (classical inheritance) or as a property on an object (prototypal inheritance)
  - Classical Inheritance
    - C++ examples of class and instances
    - Property/Method exercise with video code
  - Prototypal Inheritance
    - Prototype Chain
      - Draw graph, then myObj code to demonstrate properties, then person code to demonstrate methods
      - Don't manually assign proto like we do in these demos - it is a very slow operation in every browser and JavaScript engine
      ```js
      var myProtoObj = {
        b: 3,
        c: 4
      }

      var myObj = Object.create(myProtoObj);
      myObj.a = 1;
      myObj.b = 2;

      // prototype chain
      // myObj -> myOtherObj -> Object.prototype -> null

      // a is an own property on myObj, this will log 1
      console.log(myObj.a);

      // b is an own property on myObj, this will log 2
      console.log(myObj.b);

      // b is an own property on myObj, this will log 2
      console.log(myObj.__proto__.b);

      // c is not an own property on myObj, JavaScript will look up the prototype chain to myOtherObj and find the c property, this will log 4
      console.log(myObj.c);

      // d is not an own property on my Obj, JavaScript will look up to the prototype chain to myOtherObj, to Object.prototype and then to null and will not find d, this will be undefined
      console.log(myObj.d);
      ```
      ```js
      let myProtoProtoObj = {
        c: 9
      };

      let myProtoObj = Object.create(myProtoProtoObj);
      myProtoObj.b = 3;
      myProtoObj.c = 4

      let myObj = Object.create(myProtoObj);
      myObj.a = 1;
      myObj.b = 2;


      // prototype chain
      // myObj -> myProtoObj -> myProtoProtoObj -> Object -> null

      console.log('myObj.a: ' + myObj.a);
      console.log('myObj.b: ' + myObj.b);
      console.log('myObj proto b: ', myObj.__proto__.b);
      console.log('myObj proto c: ', myObj.__proto__.__proto__.c);
      console.log('myObj.c: ' + myObj.c);

      ```
      ```js
      let person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName() {
          return this.firstname + ' ' + this.lastname;
        }
      };

      var john = Object.create(person);
      john.firstname = 'John';
      john.lastname = 'Doe';
      console.log(john.getFullName());

      // Second demo
      var jane = new Object(person);
      jane.firstname = 'Jane';

      console.log(jane.getFullName());
      ```
      ```js
      let person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName() {
          return this.firstname + ' ' + this.lastname;
        }
      };

      var john = Object.create(person);
      john.firstname = 'John';
      john.lastname = 'Doe';
      john.getFullName = function() {
        return this.firstname + ' ' + this.lastname + ' Sr.';
      }
      console.log(john.getFullName());

      // Second demo
      var jane = new Object(person);
      jane.firstname = 'Jane';

      console.log(jane.getFullName());
      ```
  - Everything Is An Object
    - Objects
    - Functions
    - Methods
    - Object.prototype
    - Viewing Prototype Information (need html file)
      ```js
      var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName: function() {
          return this.firstname + ' ' + this.lastname;
        }
      };


      console.log('PERSON: ');
      console.log(person);
      console.log('PERSON PROTOTYPE: ');
      console.log(person.__proto__);
      console.log('PERSON PROTOTYPE ES6 STYLE: ');
      console.log(Object.getPrototypeOf(person));
      ```
    - hasOwnProperty()
      ```js
      let myProtoObj = {
        b: 3,
        c: 4
      };

      let myObj = Object.create(myProtoObj);
      myObj.a = 1;
      myObj.b = 2;
      myObj.sum = function() {
        console.log(this.a + this.b);
      };

      console.log(myObj.a);
      console.log(myObj.hasOwnProperty('a'));
      console.log(myObj.c);
      console.log(myObj.hasOwnProperty('c'));

      myObj.sum();
      console.log(myObj.hasOwnProperty('sum'));
      console.log(myObj.toString());
      console.log(myObj.hasOwnProperty('toString'));
      ```
    - Modifying the Prototype
      - Called 'monkey patching', breaks encapsulation and should be avoided
      - The only good reason for extending a built-in prototype is to backport the features of newer JavaScript engines; for example Array.forEach, etc.
      ```js
      if (typeof String.prototype.trim === 'undefined') {
        String.prototype.trim = function() {
          return this.replace(/^\s+|\s+$/g, '');
        };
      }
      ```
      ```js
      Number.prototype.isPositive = function() {
        return (this > 0);
      };
      ```
  - Prototype Information on MDN
    - Object
     - Methods with the warning sign next to them probably shouldn't be used frequently if at all. They're foundational aspects of the language.
        - For developing JavaScript, not necessarily for developing in JavaScript
    - Function
    - String
    - Array
    - Number
  - Performance Concerns
    - access via __proto__ is very expensive
  - Practical Examples
    - Basic Example
      - Notice the capital letter in Rocket. Convention that communicates that this is a prototype, an abstract representation of the structure I am creating.
      - After demo, have students come up with their own simple prototype
      ```js
      function Rocket () {

      }

      Rocket.prototype.thrusters = 4;

      var myRocket = new Rocket();
      console.log(myRocket);
      console.log(myRocket.thrusters);
      ```
    - Basic Example With Arguments: Person
      - Notice the use of this when using arguments, both in terms of the prototype's properties and methods.
      - After demo, have students come up with their own simple prototype
      ```js
      function Person(name) {
        this.name = name;
      }

      Person.prototype.greet = function(otherName) {
        return 'Hi ' + otherName + ', my name is ' + this.name;
      }

      var samantha = new Person('Samantha James');
      console.log(samantha.greet('Justin'));
      ```
      - instanceof
        - Tests whether an object has in its prototype chain the prototype property of a constructor.
        ```js
        function MyProto() {

        }

        function MyOtherProto() {

        }

        var myProtoObj = new MyProto();
        var myOtherProtoObj = new MyOtherProto();

        console.log(myProtoObj instanceof MyProto);
        console.log(myProtoObj instanceof MyOtherProto);
        console.log(myProtoObj instanceof Object);
        console.log(myOtherProtoObj instanceof MyProto);
        console.log(myOtherProtoObj instanceof MyOtherProto);
        console.log(myOtherProtoObj instanceof Object);
        ```
    - Create Hierarchy
      - How To
        ```js
        function Person() {
          this.name = '';
        }

        function Child() {
          Person.call(this);
          this.gradeInSchool = '';
        }

        Child.prototype = Object.create(Person.prototype);

        var jenny = new Child();
        jenny.name = 'Jenny';
        jenny.gradeInSchool = 1;
        console.log(jenny);
        ```
      - Employee
        - Again, we're using capitalization to communicate that we're creating an abstract representation
        ```js
        function Employee(name, idNumber, department) {
          this.name = name;
          this.idNumber = idNumber;
          this.department = department;
        }

        var samantha = new Employee('Samantha Jones', '123', 'Technology');
        console.log(samantha);
        ```
        - Manager
          ```js
          function Employee(name, idNumber, department) {
            this.name = name;
            this.idNumber = idNumber;
            this.department = department;
          }

          function Manager(name, idNumber, department, reports) {
            Employee.call(this, name, idNumber, department);
            this.reports = reports;
          }
          Manager.prototype = new Employee;

          var samantha = new Employee('Samantha Jones', 123, 'Technology');
          console.log(samantha);

          var jennifer = new Manager('Jennifer Smith', 456, 'Technology', [123]);
          console.log(samantha);
          ```
          - Engineer
            ```js
            function Engineer(name, idNumber, department, specialty) {
              Employee.call(this, name, idNumber, department);
              this.specialty = specialty;
            }
            Engineer.prototype = new Employee;

            var samantha = new Employee('Samantha Jones', 123, 'Technology', 'Electrical');
            console.log(samantha);

            var jennifer = new Manager('Jennifer Smith', 456, 'Technology', [123]);
            console.log(samantha);

            console.log('Samantha Employee :' + (samantha instanceof Employee));
            console.log('Samantha Engineer :' + (samantha instanceof Engineer));

            console.log('Jennifer Employee :' + (jennifer instanceof Employee));
            console.log('Jennifer Engineer :' + (jennifer instanceof Engineer));
            ```
          - Add an EngineeringIntern subclass to Engineer that includes a new property, mentor, to the class
            ```js
            function EngineeringIntern(name, idNumber, department, specialty, mentor) {
              Engineer.call(this, name, idNumber, department, specialty);
              this.mentor = mentor;
            }
            EngineeringIntern.prototype = new Engineer;

            let oscar = new Engineer('Oscar Ruiz', 789, 'Technology', 'Computer');
            console.log(oscar);

            let jeff = new EngineeringIntern('Jeff Brown', 147, 'Technology', 'Computer', 789);
            console.log(jeff);
            ```
          - Add a Sales prototype
            ```js
            function Sales(name, idNumber, department, quota) {
              Employee.call(this, name, idNumber, department);
              this.quota = quota;
            }
            Sales.prototype = new Employee;

            let carlos = new Sales('Carlos Mendez', 258, 'Sales', 5);
            console.log(carlos);
            ```
          - Add a function to the Sales prototype to determine whether or not they've met their quota.
            ```js
            function Sales(name, idNumber, department, quota) {
              Employee.call(this, name, idNumber, department);
              this.quota = quota;

              this.didMeetQuota(actualSales) {
                return (actualSales >= this.quota);
              }
            }
            Sales.prototype = new Employee;

            console.log(carlos.didMeetQuota(6));
            ```
          - Add a function that only Engineers and Engineering Interns can access
            ```js
            function Engineer(name, idNumber, department, specialty) {
              Employee.call(this, name, idNumber, department);
              this.specialty = specialty;

              this.doesLikeJavascript = function() {
                return this.specialty.toLowerCase() === 'computer'
              }
            }
            Engineer.prototype = new Employee;

            console.log(samantha.doesLikeJavascript());
            console.log(oscar.doesLikeJavascript());
            console.log(jeff.doesLikeJavascript());
            ```
          - Complete Final Code
            ```js
            function Employee(name, idNumber, department) {
              this.name = name;
              this.idNumber = idNumber;
              this.department = department;
            }

            function Manager(name, idNumber, department, reports) {
              Employee.call(this, name, idNumber, department);
              this.reports = reports;
            }
            Manager.prototype = new Employee;

            function Engineer(name, idNumber, department, specialty) {
              Employee.call(this, name, idNumber, department);
              this.specialty = specialty;

              this.doesLikeJavascript = function() {
                return this.specialty.toLowerCase() === 'computer'
              }
            }
            Engineer.prototype = new Employee;

            function Sales(name, idNumber, department, quota) {
              Employee.call(this, name, idNumber, department);
              this.quota = quota;

              this.didMeetQuota(actualSales) {
                return (actualSales >= this.quota);
              }
            }
            Sales.prototype = new Employee;

            function EngineeringIntern(name, idNumber, department, specialty, mentor) {
              Engineer.call(this, name, idNumber, department, specialty);
              this.mentor = mentor;
            }
            EngineeringIntern.prototype = new Engineer;

            let samantha = new Engineer('Samantha Jones', 123, 'Technology', 'Electrical');
            console.log(samantha);
            console.log(samantha.doesLikeJavascript());

            let oscar = new Engineer('Oscar Ruiz', 789, 'Technology', 'Computer');
            console.log(oscar);
            console.log(oscar.doesLikeJavascript());

            let jeff = new EngineeringIntern('Jeff Brown', 147, 'Technology', 'Computer', 789);
            console.log(jeff);
            console.log(jeff.doesLikeJavascript());

            let jennifer = new Manager('Jennifer Smith', 456, 'Technology', [123, 789, 147]);
            console.log(jennifer);

            let carlos = new Sales('Carlos Mendez', 258, 'Sales', 5);
            console.log(carlos);
            ```
  - Prototype and ES6
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

    const myRect = new Rectangle(10, 15);
    console.log(myRect);
    console.log(myRect.calcArea());
    console.log(myRect.area);
    ```
