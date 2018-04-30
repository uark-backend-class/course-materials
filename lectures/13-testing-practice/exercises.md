# Testing Practice Exercises

- Given the following functions, write a set of unit tests that will test for the following:
    - Is the function defined?
    - Does the function return the correct output when the input is correct?
    - Does the function throw an error when the input is incorrect?
    - Does the function throw an error when the input is undefined?


```js
describe('fetchFromDatabase', () => {
    it('should return a user when a valid id is passed in', (done) => {
        fetchFromDatabase('1')
            .then((data) => {
                expect(data).to.deep.equal({ name: 'Spruce '});
                done();
            });
    });
});
```



## Exercise 1
```js
let addFunc = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('invalid parameters!');
    }
    return a + b;
};
```

## Exercise 2
```js
let asyncSortArray = function(arr, cb) {
    if (!arr || !Array.isArray(arr)) {
        cb(new Error('not an array'), null);
        return;
    }
    let sortedArr = arr.slice().sort();
    cb(null, sortedArr);
}
```

## Exercise 3
```js
let fetchFromDatabase = function(userId) {
    const users = {
        '1': {
            name: 'Spruce'
        },
        '2': {
            name: 'Brenna'
        }
    };

    return new Promise(function(resolve, reject) {
        if (!userId && typeof userId !== 'string') {
            return reject('invalid parameters!');
        }
        const user = users[userId];
        if (user) {
            return resolve(user);
        } else {
            return reject('user not found');
        }
    });
}
```
