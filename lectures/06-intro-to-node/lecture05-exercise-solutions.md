# Exercise 1

```js
let http = require('http');
let fs = require('fs');

const server = http.createServer((req, res) => {
    let fileStream = fs.createReadStream('lorem.txt');
    let data = '';

    fileStream.on('data', (chunk) => {
        data += chunk;
    });

    fileStream.on('end', () => {
        res.write(data);
        res.end();
    });
});

server.listen(3000);
```


# Exercise 2

```js
let fs = require('fs');
let zlib = require('zlib');

let filename = 'text.txt';
let zippedfilename = 'lorem.zip';

let compressed = fs.createReadStream(zippedfilename);
let uncompressed = fs.createWriteStream(filename);
let gzip = zlib.createGunzip();

compressed.pipe(gzip).pipe(uncompressed);
```
