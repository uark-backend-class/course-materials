const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const errMiddleware = require('./err-middleware');
const helpers = require('./helpers');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my login app!');
});

app.post('/', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };

  helpers.sendRequest('http://localhost:3004')
    .then((result) => {
      if (!helpers.validateUser(JSON.parse(result.body), user)) {
        throw new Error('Incorrect credentials');
      }
      const date = moment(Date.now()).format('YYYY-MM-DD');
      return helpers.sendRequest('http://localhost:3005/tracking?username=' + user.username + '&currentDate=' + date);
    })
    .then((result) => {
      if (result.res.statusCode === 403) {
        throw new Error('Too many login attempts');
      }

      res.status(200).json(user);
    })
    .catch(next);
});

app.use(errMiddleware);
app.listen(3006);

module.exports = app;
