# The Node.js Standard Library

We're going to spend some time working with a few of the built-in Node.js libraries: `fs` and `path`.

## Path

The `path` module provides ways to work with directory paths. It's important to note that the functionality for some of the path functions is different depending on the file system on the OS. Windows performs a bit differently than other systems, so keep this in mind and check the documentation if working in Windows and using `path`.

### path.basename

`path.basename` will return the last portion of a path (i.e. the file name). This can be useful to retrieve file references across the file system.

```js
let path = require('path');

let output = path.basename('~/dev/node-projects/script.js');

console.log(output);
```

It's important to know that `basename` does not do any validation on the path provided, it only manipulates the string that's given to the function. This function also takes a second (optional) argument that represents the file extension type. Including this argument will only return the name of the file without the extension.

```js
let path = require('path');

let output = path.basename('~/dev/node-projects/script.js', 'js');

console.log(output);
```

### path.dirname

`path.dirname` will return the directory of a provided path. It's again important to note that this function is simply a string manipulation function and that it does not validate the existence of the path provided.

```js
let path = require('path');

let output = path.dirname('~/dev/node-projects/script.js');

console.log(output);
```

### path.resolve

`path.resolve` will construct an absolute path from strings provided as arguments. The arguments are resolved from right to left, and if no absolute path is given as part of the arguments, then the current working directory is used. This can be great for generating paths within an application.

```js
let path = require('path');

let output = path.resolve('script.js');

console.log(output);
```

An example using multiple directories:

```js
let path = require('path');

let output = path.resolve('sub-dir', 'sub-sub-dir', 'script.js');

console.log(output);
```

## FS

Interacting with the file system is done through the `fs` module. There are a few functions we'll explore now that are useful, and add a few more additional functions later.

### fs.writeFileSync

`fs.writeFileSync` creates a file synchronously. This function takes 3 arguments:

  - `filename`
  - `data` - information that should be included in the file
  - `options` (optional) - This can specify additional options such as file-encoding, mode, etc. For our purposes, we will use the default options. By default, files are encoded as the `utf-8` type.

```js
let fs = require('fs');

fs.writeFileSync('new-file.txt', 'Mmmm, pancakes!');
// creates a file named new-file.txt with 'Mmmm, pancakes!' on the first line
```

### fs.readFileSync

`fs.readFileSync` reads a file synchronously. This function takes 2 arguments:

  - `filename`
  - `options` (optional) - This option can be used to specify file-encoding. Without specifying encoding, this function will return a buffer. We want it to return a string of data, so we will have to specify the file-encoding.

```js
let fs = require('fs');

fs.writeFileSync('new-file.txt', 'Mmmm, pancakes!');
let fileContents = fs.readFileSync('new-file.txt', 'utf-8'); // Mmmm, pancakes!

console.log(fileContents);
```

### fs.appendFileSync

`fs.appendFileSync` appends data to a file synchronously. This function takes 3 arguments:

  - `filename`
  - `data` - text (or buffer) to append to the file
  - `options` (optional) - This can specify additional options such as file-encoding, mode, etc. For our purposes, we will use the default options. By default, files are encoded as the `utf-8` type.

```js
let fs = require('fs');

fs.writeFileSync('new-file.txt', 'Mmmm, pancakes!');
fs.readFileSync('new-file.txt', 'utf-8'); // Mmmm, pancakes!
fs.appendFileSync('new-file.txt', '\nBut don\'t forget about waffles!');
let fileContents = fs.readFileSync('new-file.txt', 'utf-8'); // Mmmm, pancakes! <n> But don't forget about waffles!

console.log(fileContents);
```

### fs.unlinkSync

`fs.unlinkSync` deletes a file or folder synchronously. This function takes 1 argument:

  - `path` - file path to be deleted

```js
let path = require('path');
let fs = require('fs');

fs.writeFileSync('new-file.txt', 'Mmmm, pancakes!');
fs.readFileSync('new-file.txt', 'utf-8'); // Mmmm, pancakes!
fs.appendFileSync('new-file.txt', '\nBut don\'t forget about waffles!');
fs.readFileSync('new-file.txt', 'utf-8'); // Mmmm, pancakes! <n> But don't forget about waffles!
fs.unlinkSync(path.resolve('new-file.txt'));
let fileContents = fs.readFileSync('new-file.txt', 'utf-8'); // Error! No file new-file.txt exists!

console.log(fileContents);
```

# Node.js Event Emitter

## What's an Event?

An event is something that happens somewhere in our application, and we want to react to that occurrence. This is a concept that is fundamental to Node, and prevalent on the front-end as well.

### What is an emitter?

_emitter.js_:

```js
let emitter = {
  events: {},
  on: on,
  emit: emit
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
    for (let i = 0; i < this.events[eventType].length; i++) {
      this.events[eventType][i]();
    }
  }
}

module.exports = emitter;
```

_server.js_:

```js
let emitter = require('./emitter');

emitter.on('call-the-hogs', function () {
  console.log('WOOOOOOOOOO');
});

emitter.on('call-the-hogs', function () {
  console.log('PIG');
});

emitter.on('call-the-hogs', function () {
  console.log('SOOOOOIE!');
});

emitter.emit('call-the-hogs');
```

## Node Events

_server.js_:

```js
let Events = require('events');

let emitter = new Events();

emitter.on('call-the-hogs', function () {
  console.log('WOOOOOOOOOO');
});

emitter.on('call-the-hogs', function () {
  console.log('PIG');
});

emitter.on('call-the-hogs', function () {
  console.log('SOOOOOIE!');
});

emitter.emit('call-the-hogs');
```
