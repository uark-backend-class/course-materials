# Exercise 1

```bash
mkdir node-emoji-demo && cd $_
git init
npm init
npm install node-emoji --save
git add .
git commit -m 'Initialize project'
touch index.js && atom .
```

_index.js_:

```js
const emoji = require('node-emoji');

function loopEmoji() {
  const emojis = [];

  for (let i = 0; i < 10; i++) {
    emojis.push(emoji.random().emoji);
  }

  for (let i = 0; i < emojis.length; i++) {
    console.log(emojis[i]);
  }
}

loopEmoji();
```

```bash
git add .
git commit -m 'Emoji all the things!'
git remote add origin <repository-goes-here>
git push origin master
```

# Exercise 2

_index.js_:

```js
const http = require('http');
const emoji = require('node-emoji');

const server = http.createServer((req, res) => {
  res.write(emoji.random().emoji + '\n');
  res.end();
});

server.listen(8001);
console.log('Server listening on port 8001...');
```

```bash
curl http://localhost:8001/
git add .
git commit -m 'Server sends emoji'
git push origin master
```
