# Exercise 1
```js
const hello = function (callback) {
    callback();
}

hello(() => {console.log('Callback Called!');});
```

```js
const hello = function (callback) {
    callback();
}

hello(function () {
    console.log('Callback Called!');
});
```

# Exercise 2

```js
const slowFunction = function () {
    setTimeout(() => {
        console.log('Slow');
    }, 500);
};

const fastFunction = function () {
    setTimeout(() => {
        console.log('Fast');
    }, 100);
};

slowFunction();

fastFunction();
```

# Exercise 3

```js
const fs = require('fs');

const readFile = function () {
    fs.readFile('textfile.txt', 'utf-8', (err, data) => {
        console.log(data);
        console.log('DONE READING FILE');
    });
}

readFile();
```

# Exercise 4

```js
let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
  fs.readFile('textfile.txt', 'utf-8', function(err, data) {
      res.write(data);
      res.end();
  })

});

server.listen(3000);
console.log('Server listening on port 3000...');
```
