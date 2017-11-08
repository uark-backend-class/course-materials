# Exercise Solutions

## Exercise 1

_index.js_:

```js
const express = require('express');
const emoji = require('node-emoji');
const bunyan = require('bunyan');

const app = express();
const logger = bunyan.createLogger({name: 'countdown'});

app.get('/', (req, res) => {
  const greeting = emoji.emojify(':balloon: :tada:  HAPPY HAPPY :confetti_ball:  JOY JOY :tada: :balloon:');
  res.status(200).send(greeting);
});

app.get('/countdown/:nbr', (req, res) => {
  let starting = req.params.nbr;
  const startTime = Date.now();

  const countDown = setInterval(() => {
    console.log(starting);
    starting--
    if (starting === 0) {
      clearInterval(countDown);
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toString();
      res.status(200).send(emoji.emojify(':stopwatch:  ' + totalTime + 's\n'));
    }
  }, 1000);

});

app.listen(3000, () => {
  logger.info('Application listening on port 3000...');
});
```
