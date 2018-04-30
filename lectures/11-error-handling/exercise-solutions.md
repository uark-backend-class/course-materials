# Exercise Solutions

## Exercise 1

```js
let checkString = function(string) {
    if (string.split(" ").length > 1) {
        throw new Error('only one word allowed');
    }
    return 1;
}

try {
    console.log(checkString('word'));
} catch (e) {
    console.log(e);
}

try {
    console.log(checkString('two words'));
} catch (e) {
    console.log(e);
}
```

## Exercise 2

```js
let checkStringCb = function(string, cb) {
    if (string.split(" ").length > 1) {
        cb(new Error('only one word allowed'));
    }
     else {
        cb(null, 1);
    }
}

checkStringCb("word", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

checkStringCb("two words", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
```
