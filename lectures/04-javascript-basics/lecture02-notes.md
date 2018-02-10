[Operators](#operators) | [Data Types](#data-types) | [Arrays](#arrays)

## Basic Syntax

A great overview of basic JS syntax can be found on [this Wikipedia page](https://en.wikipedia.org/wiki/JavaScript_syntax).

## Operators

[Unary](#unary) | [Arithmetic](#arithmetic) | [Assignment](#assignment) | [Comparison](#comparison) | [Logical](#logical)

Lots of detailed operand information can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

### Unary

[Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary_operators) require only one operand, which can come before or after the operator.

```
operator operand

// or

operand operator

// example

x++
++x
```

#### typeof

The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator returns a value that indicates the type of the operand.

```
typeof operand

// or

typeof (operand)
```

```js
typeof (5 + 2)	// returns "number"
typeof "javascript"  // returns "string"
```

### Arithmetic

[Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) in JS take numerical values (which can also be variables) as operands and returns a single mathematical result.

- Addition ( + )
- Subtraction ( - )
- Multiplication ( * )
- Division ( / )

There are also a few special JS arithmetic operators.

- Modulus / Remainder (%) - This will return the remainder after dividing operand 1 by operand 2. This is useful for determining if a number is odd or even.

```js
x = 4 % 2	// x = 0
y = 5 % 2	// y = 1
```

- Increment / Decrement (++ | --) - These operators are used to increment or decrement an integer by 1. This operator is also considered a unary operator.

```js
x = 1
x++		// x = 2
x++		// x = 3
```

### Assignment

The [assignment operator](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) assigns the value of the right operand to the left operand.

```
operand operator operand
```

```js
x = 'javascript'

console.log(x) 	// returns "javascript"
```

Mathematical assignment and incrementing can happen through a number of shorthand operators. For example:

```js
// traditional version
x = x + y

// shorthand version
x += y
```

The above syntax can be used in conjunction with all mathematical operators (`-`, `*`, `/`, `%`). These can also be considered unary operators.

### Comparison

[Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) will compare the operands and return a binary value as a result of the comparison.

#### Equal

- Equal (==) - returns true if the operands are equal. It's important to note that this operator will convert the operands if they are not of the same type. Once the operands have been converted, the double equal will apply strict comparison. In general, this comparison operator is frowned upon except in a few edge cases in order to encourage stricter type comparisons. For detailed information on the algorithm used for this comparison, see the [ECMAScript specification](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).

```js
9 == '9'	// returns true

x = 4
y = '4'

x == y		// returns true
```

- Not Equal (!=) - returns true if the operands are not equal. This will also attempt to convert the operands if they are not of the same type. This method of type conversion for comparison is also frowned upon in most cases.

```js
9 != '8'	// returns true
9 != '9'	// returns false

x = 4
y = (3 + 2)

x != y		// returns true
```

- Strict Equal (===) - will only return true if the operands are strictly equal with no type conversion. This is the suggested method of comparison.

```js
9 === 9		// returns true
9 === '9'	// returns false
```

- Strict Not Equal (!===) - will only return true if the operands are strictly not equal with no type conversion. Thi sis the suggested method of comparison.

```js
9 !== 9		// returns false
9 !== '9'	// returns true
```

#### Inequalities

In addition to the above arithmetic operators, JavaScript also offers inequalities in the form of greater than (>), greater than or equal to (>=), less than (<) and less than or equal to (<=).

```js
5 > 3	 	// returns true
3 < 5		// returns true
3 >= 3		// returns true
4 <= 4		// returns true
```

Similar to the equality operator (==), inequalities prescribe to certain type conversion rules when operands of different types are being compared.

- If the operands are numbers, perform a numeric comparison
- If the operands are strings, compare the character codes of each corresponding character in the string
- If the one operand is a number, convert the other operand to a number and perform a numeric comparison
- If an operand is a Boolean, convert it to a number (1 or 0) and perform a comparison

It's important to note that when comparing two strings, the comparison is not done based on the alphabetical placement. In these cases, the character codes are compared. This can be a problem when the strings compare uppercase characters, as all uppercase characters have a lower character code than their lowercase counterparts.

Example:

```js
'Dog' > 'cat'	// returns false
```

The character code for "D" is 68, while the character code for "c" is 99. In cases such as this, it's best practice to convert strings to the same case. This can be done with the [`.toLowerCase()` method of the String object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

```js
'Dog'.toLowerCase() > 'cat'.toLowerCase() 	// returns true
```

### Logical

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) can be used in a few scenarios:

- to string together multiple Boolean statements
- to return a specific value if a condition is not met (only applicable to && and ||)

#### Logical NOT

[The logical NOT operator (!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) always returns a Boolean value and can be applied to any value. The NOT operator first converts the operand to a Boolean value and then negates it, and thus behaves:

- If the operand is an object, returns false.
- If the operand is an empty string, returns true.
- If the operand is a nonempty string, returns false.
- If the operand is the number 0, returns true.
- If the operand is any number other than 0, returns false.
- If the operand is null, returns true.
- If the operand is NaN, returns true.
- If the operand is undefined, returns true.

```js
let obj = { 'greeting': 'howdy' };

console.log(!obj);			// returns false
console.log(!'');			// returns true
console.log(!'foo');		// returns false
console.log(!0);			// returns true
console.log(!7);			// returns false
console.log(!null);			// returns true
console.log(!NaN);			// returns true
console.log(!undefined);	// returns true
```

Additionally, it's also possible to convert a value into its Boolean equivalent using two NOT operators in a row. This will simulate the behavior of [Boolean()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean). The second NOT essentially negates the first Boolean value and evaluates the variable.

```js
console.log(!'foo');			// returns false
console.log(!!'foo');			// returns true
console.log(Boolean('foo'));	// returns true
```

The first example can be read as: "foo" is NOT a string, which evaluates to false because "foo" is a string. The second example states that "foo" is NOT  string, and then essentially inverts the Boolean value.

#### Logical AND

[The logical AND operator (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) is applied to two values and behaves in the following way:

| Operand 1	| Operand 2	| Result 	|
|:---------:|:---------:|:---------:|
| true		| true 		| true		|
| true	 	| false 	| false		|
| false 	| true		| false		|
| false		| false		| false 	|

As the above table illustrates, the any expression using the && operator evaluates to true only when both operands are also evaluated as true.

If one of the operands is not a primitive Boolean, then the && operator will behave in the following ways:

- If the first operand is an object, then the second operand is returned.
- If the second operand is an object, then the object is returned only if the first operand evaluates to true.
- If both operands are objects, then the second operand is returned.
- If either operand is null, then null is returned.
- If either operand is NaN, then NaN is returned.
- If either operand is undefined, then undefined is returned.

It's important to note that if the first operand of the logical && expression evaluates as false, the second operand is never evaluated. This occurs because JavaScript will assume that if the first value is false, then there is no reason to evaluate the second operand.

```js
let foo = true;

let result = (foo && bar);		// error thrown
console.log(result);
```

In the above, an error is thrown because the first part of the expression is evaluated as true, and `bar` is an undefined variable in the second part of the expression. However, if `foo` is changed to false, then the second part of the expression will not be evaluated and no error will be thrown.

```js
let foo = false;

let result = (foo && bar);		// no error
console.log(result);			// returns false
```

#### Logical OR

[The logical OR operator (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) behaves as such:

| Operand 1	| Operand 2	| Result 	|
|:---------:|:---------:|:---------:|
| true		| true 		| true		|
| true	 	| false 	| true		|
| false 	| true		| true		|
| false		| false		| false 	|

Similar to the logical AND, if either of the operators is not a primitive Boolean, logical OR will do one of the following:

- If the first oeprand is an object, return first operand.
- If the first operand evaluates to false, return second operand.
- If both operands are objects, return first operand.
- If both operands are null, return null.
- If both operands are NaN, return NaN.
- If both operands are undefined, return undefined.

Also like the logical AND operator, if the first operand evaluates to true, then the second operand is not evaluated.

One of the most common uses for the logical OR operator is to prevent assigning a null or undefined value to a variable.

```js
let foo = bar || baz;
```

In the above example, if `bar` is unassigned or undefined, then `baz` is used as a backup variable / object.
