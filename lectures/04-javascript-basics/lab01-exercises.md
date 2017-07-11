# Lab 1 - JavaScript Basics - Exercises

## Exercise 1

Below is an incomplete code snippet, your task will be to write the rest of the program. `translations` contains a
list of languages and the translation for 'Welcome' in that language. Your task is to complete the function
that will accept the list of translations as a variable and a language as another variable.

Your function should print out the translation of 'Welcome' that corresponds to the language passed in.

```js
(function () {
    const translations = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };

    function welcome (translations, language) {
        // your code goes here
    };

    welcome(translations, 'french');
    welcome(translations, 'polish');
    welcome(translations, 'english');
    welcome(translations, 'estonian');
})();
```

Hint: All of the following are valid ways to access a property on an object.

```js
const person = {
    name: 'Spruce'
};

console.log(person.name);
console.log(person['name']);

const name = 'name';

console.log(person[name]);
```

## Exercise 2

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to
make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make
enough money and must receive only his stated salary. Your function should print out their final salary.

```js
(function () {

    function calculateBonus (salary, bonus) {
        // your code goes here
    };

    calculateBonus(10000, false);
    calculateBonus(45000, true);

})();
```

## Exercise 3

Below is an incomplete code snippet, your task will be to write the rest of the program.
`groceryList` is a list of items on your grocery list, along with the price for that item at two different stores.
In the `WhereToShop` function, you should print out the cheaper of the two prices for each item.

For bonus points, print out the total that you would spend if you bought each item where it was cheaper.

```js
(function () {
    const groceryList = [
        {
            item: 'bread',
            walmartPrice: 3.50,
            costCoPrice: 3.75
        },
        {
            item: 'milk',
            walmartPrice: 1.75,
            costCoPrice: 2.15
        },
        {
            item: 'cookies',
            walmartPrice: 4.35,
            costCoPrice: 3.10
        },
        {
            item: 'apples',
            walmartPrice: 5.00,
            costCoPrice: 4.75
        }
    ];

    function goShopping (groceryList) {
        //your code goes here
    };

    goShopping(groceryList);
})();
```

Hint: The following is a valid shortcut to access the property of an object in an array

```js
const people = [
    {
        name: 'Spruce'
    },
    {
        name: 'Brenna'
    }
];

console.log(people[0].name); // Spruce
```

## Exercise 4

- [Codecademy](https://www.codecademy.com/learn/learn-javascript)
  - Introduction to JavaScript
  - Variables
  - Control Flow

## Exercise 5 - Bonus

Below is an incomplete code snippet, your task will be to write the rest of the program.
The variable `students` contains a list of students and their respective homework and test scores for a class.
Your job is to assign each of the students a letter grade based on the average of their homework and test scores
(for the purpose of this exercise, homework and tests are weighted equally).

Your function should print the students name and letter grade.

```js
(function () {
    const students = [
        {
            name: 'Jim',
            homeworkScores: [90, 75, 82, 94],
            testScores: [98, 87]
        },
        {
            name: 'Maria',
            homeworkScores: [66, 83, 91, 93],
            testScores: [85, 88]
        },
        {
            name: 'Pam',
            homeworkScores: [92, 87, 85, 91],
            testScores: [89, 78]
        },
        {
            name: 'Fernando',
            homeworkScores: [83, 71, 92, 100],
            testScores: [95, 91]
        }
    ];

    function gradeStudents (students) {
        //your code goes here
    };

    gradeStudents(students);
})();
```

Hint: You can nest loops inside one another

```js
const foo = [
    [0, 1, 2],
    ['a', 'b', 'c']
];

for (item in foo) {
    for (innerItem in foo[item]) {
        console.log(foo[item][innerItem]); // 0 1 2 a b c
    }
}
```
