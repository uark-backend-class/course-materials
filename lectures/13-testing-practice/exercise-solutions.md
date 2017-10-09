# Testing Practice Exercise Solutions

## Exercise 1
```js
const chai = require('chai');

const expect = chai.expect;

let addFunc = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('invalid parameters!');
    }
    return a + b;
};

describe('addFunc', () => {
    it('Should be a function', () => {
        expect(addFunc).to.be.a('function');
    });

    it('Should return the correct number when called', () => {
        let number = addFunc(5, 6);
        expect(number).to.be.equal(11);
    });

    it('Should throw an error when an invalid parameter is passed in', () => {
        try {
            addFunc(5, 'six');
        } catch(e) {
            expect(e).to.be.not.null;
        }
    });

    it('Should throw an error when no parameter is passed in', () => {
        try {
            addFunc(5);
        } catch(e) {
            expect(e).to.be.not.null;
        }
    });
});
```

## Exercise 2
```js
const chai = require('chai');

const expect = chai.expect;

let array = [1,4,3,6,8,5];

let asyncSortArray = function(arr, cb) {
    if (!arr || !Array.isArray(arr)) {
        cb(new Error('not an array'), null);
        return;
    }
    let sortedArr = arr.slice().sort();
    cb(null, sortedArr);
}

describe('asyncSortArray', () => {
    it('Should be a function', () => {
        expect(asyncSortArray).to.be.a('function');
    });

    it('Should return the correct number when called', (done) => {
        asyncSortArray(array, (err, sortedArray) => {
            expect(err).to.be.null;
            expect(sortedArray).to.deep.equal([1, 3, 4, 5, 6, 8]);
            done();
        });
    });

    it('Should throw an error when an invalid parameter is passed in', (done) => {
        asyncSortArray(5, (err, sortedArray) => {
            expect(err).to.be.not.null;
            done();
        });
    });

    it('Should throw an error when no parameter is passed in', (done) => {
        asyncSortArray(undefined, (err, sortedArray) => {
            expect(err).to.be.not.null;
            done();
        });
    });
});
```

## Exercise 3
```js
const chai = require('chai');

const expect = chai.expect;

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
};

describe('fetchFromDatabase', () => {
    it('Should be a function', () => {
        expect(fetchFromDatabase).to.be.a('function');
    });

    it('Should return a user when a valid id is passed in', (done) => {
        fetchFromDatabase('1')
            .then((data) => {
                expect(data).to.deep.equal({name: 'Spruce'});
                done();
            });
    });

    it('Should throw an error when an invalid parameter is passed in', (done) => {
        fetchFromDatabase(5)
            .then((data) => {

            })
            .catch((err) => {
                expect(err).to.not.be.null;
                done();
            });
    });

    it('Should throw an error when no parameter is passed in', (done) => {
        fetchFromDatabase()
            .then((data) => {

            })
            .catch((err) => {
                expect(err).to.not.be.null;
                done();
            });
    });

    it('Should throw an error when a user is not found', (done) => {
        fetchFromDatabase('6')
            .then((data) => {

            })
            .catch((err) => {
                expect(err).to.not.be.null;
                done();
            });
    });
});
```
