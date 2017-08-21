[Exercise 1](#exercise-1) | [Exercise 2](#exercise-2) | [Exercise 3](#exercise-3)

# Exercise 1

_numbers-module.js_:

```js
module.exports = function (nbr, arr) {
  let result = [];
  let nbrIndex = arr.indexOf(nbr);

  if (nbr === arr[0]) {
    result.push(arr[arr.length - 1]);
    result.push(arr[nbrIndex + 1]);
  } else if (nbr === arr[arr.length - 1]) {
    result.push(arr[nbrIndex - 1]);
    result.push(arr[0]);
  } else {
    result.push(arr[nbrIndex - 1]);
    result.push(arr[nbrIndex + 1]);
  }

  return result;
};
```

_index.js_:

```js
let beforeAfter = require('./numbers-module.js');

let arr = [62,89,56,45,12,91,81];

console.log(beforeAfter(45, arr));
```

# Exercise 2

_file-io.js_:

```js
var fs = require('fs');
var path = require('path');

var fileIO = {
  createFile: createFile,
  readFile: readFile,
  appendToFile: appendToFile,
  deleteFile: deleteFile
};

function createFile (fileName, content) {
  fs.writeFileSync(fileName, content);
  return fs.readFileSync(fileName, 'utf-8');
}

function readFile (fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

function appendToFile (fileName, content) {
  fs.appendFileSync(fileName, content);
  return fs.readFileSync(fileName, 'utf-8');
}

function deleteFile (fileName) {
  fs.unlinkSync(path.resolve(fileName));
  return 'Successfully removed ' + fileName + '.';
}

module.exports = fileIO;
```

_server.js_:

```js
var http = require('http');

var fileIO = require('./file-io');

var server = http.createServer(function (req, res) {
  fileIO.createFile('numbers.txt', 'My Magic Number:\n');
  fileIO.appendToFile('numbers.txt', (Math.random() * 10).toString());
  res.write(fileIO.readFile('numbers.txt'));
  res.end();
});

server.listen(3000);
console.log('Server running on port 3000');
```

# Exercise 3

_emitter.js_:

```js
var emitter = {
  events: {},
  on: on,
  emit
};

function on (eventType, listenerFunc) {
  if (!this.events[eventType]) {
    this.events[eventType] = [listenerFunc]
  } else {
    this.events[eventType].push(listenerFunc);
  }
}

function emit (eventType) {
  if (this.events[eventType]) {
    for (var i = 0; i < this.events[eventType].length; i++) {
      this.events[eventType][i]();
    }
  }
}

module.exports = emitter;
```

_server.js_:

```js
var emitter = require('./emitter');

emitter.on('winter', function () {
  console.log('Winter is coming');
});

emitter.on('call-the-hogs', function () {
  console.log('Woooo Pig Soooie!');
});


emitter.emit('winter');
emitter.emit('call-the-hogs');
```
