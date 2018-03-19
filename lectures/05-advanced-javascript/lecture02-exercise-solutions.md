# Exercise 1

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

let anotherPerson = {
  firstName: 'Jane',
  lastName: 'Smith'
}

// Most Straightforward
anotherPerson.getFullName = person.getFullName;
console.log(person.getFullName());
console.log(anotherPerson.getFullName());

// Using call on Function prototype
console.log(person.getFullName());
console.log(person.getFullName.call(anotherPerson));

// Using bind on Function prototype
let getOtherFullName = person.getFullName.bind(anotherPerson);
console.log(person.getFullName());
console.log(getOtherFullName());
```

# Exercise 2

```js
let object = {
  prop1: 'Hello ',
  prop2: 'World',
  printObj: function () {
    console.log(prop1, prop2);
  }
};

object.printObj();
```

# Exercise 3

```js
function addTwo() {
    console.log(this.num + 2);
}

addTwo.call({ num: 8 });
addTwo.apply({ num: 8 });
let newAddTwo = addTwo.bind({ num: 8 });
newAddTwo();
```