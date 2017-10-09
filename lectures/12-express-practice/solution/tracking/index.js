const express = require('express');

const errMiddleware = require('./err-middleware');

const app = express();

const trackingCache = {};

app.get('/tracking', (req, res, next) => {
  if (!req.query || !req.query.username || !req.query.currentDate) {
    next('Incorrect query params provided: ' + JSON.stringify(req.query));
  }

  const user = req.query.username;
  const date = req.query.currentDate;

  if (!trackingCache[user]) {
    trackingCache[user] = {};
    trackingCache[user][date] = 0;
  }

  if (!trackingCache[user][date]) {
      trackingCache[user][date] = 0
  }

  trackingCache[user][date] += 1;

  if (trackingCache[user][date] > 5) {
    res.status(403).end();
  } else {
    res.status(200).end();
  }
});

app.use(errMiddleware);
app.listen(3005);

module.exports = app;
