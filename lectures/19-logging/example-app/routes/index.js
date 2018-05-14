const router = require('express').Router();
const emoji = require('node-emoji');

router.get('/', (req, res) => {
  req.log.info('GET /');
  const greeting = emoji.emojify(':balloon: :tada:  HAPPY HAPPY :confetti_ball:  JOY JOY :tada: :balloon:');
  res.status(200).send(greeting);
});

router.get('/countdown/:nbr', (req, res) => {
  let starting = req.params.nbr;
  const startTime = Date.now();

  const countDown = setInterval(() => {
    req.log.info('Counting down: ' + starting);
    starting--
    if (starting === 0) {
      clearInterval(countDown);
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toString();
      res.status(200).send(emoji.emojify(':stopwatch:  ' + totalTime + 's\n'));
    }
  }, 1000);

});

router.get('/error', (req, res, next) => {
  next(new Error('oh no!'));
})

module.exports = router;
