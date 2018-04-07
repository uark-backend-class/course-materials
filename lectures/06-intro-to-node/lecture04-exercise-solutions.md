# Exercise 1
```js
let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    fs.writeFile('filename.txt', '', (err) => {
        if (err) {
            console.log(err);
        }
        fs.appendFile('filename.txt', 'some stuff', (err) => {
            if (err) {
                console.log(err);
            }
            fs.readFile('filename.txt', 'utf-8', (err, fileData) => {
                res.write(fileData);
                res.end();
            });
        });
    });
});


server.listen(fs.readFileSync('port.conf', 'utf8'));
console.log('Server listening on port 3000...');
```

# Exercise 2

_app.js_
```js
let http = require('http');
let fileModule = require('./module');

let server = http.createServer(function (req, res) {
    fileModule.createFile('filename.txt').then(() => {
        return fileModule.appendFile('filename.txt', 'some stuff');
    })
    .then(() => {
        return fileModule.readFile('filename.txt');
    })
    .then((fileData) => {
        res.write(fileData);
        res.end();
    })
    .catch((err) => {
        console.log(err);
    });
});

server.listen(3000);
console.log('Server listening on port 3000...');
```

# Exercise 3

_module.js_
```js
let someModule = {
    multiply
};

function multiply(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            return resolve(a * b);
        }, 200);
    });
}

module.exports = someModule;
```

_app.js_
```js
let http = require('http');
let someModule = require('./module');

let server = http.createServer(function (req, res) {
    let userPromises = [];

    userPromises.push(someModule.multiply(2, 4));
    userPromises.push(someModule.multiply(5, 7));
    userPromises.push(someModule.multiply(8, 12));
    userPromises.push(someModule.multiply(32, 1));
    userPromises.push(someModule.multiply(3, 5));

    Promise.all(userPromises)
    .then((data) => {
        res.write(data.join());
        res.end();
    })
    .catch((err) => {
        console.log(err);
    });
});

server.listen(3000);
console.log('Server listening on port 3000...');
```
