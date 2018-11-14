const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const moment = require('moment');

const users = require('./users');
const errMiddleware = require('./err-middleware');
const helpers = require('./helpers');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json(users);
});

app.post('/', (req, res, next) => {
  if (helpers.validateUser(req.body)) {
    const userCopy = Object.assign({}, req.body);
    userCopy.id = uuid.v4();
    userCopy.created = moment(Date.now()).format('YYYY-MM-DD');
    users.push(userCopy);
    res.status(200).json(userCopy);
  } else {
    next('Invalid user provided');
  }
});

app.get('/user/:id', (req, res, next) => {
  const user = users.filter((userObject) => {
    return req.params.id === userObject.id;
  });

  if (user.length > 0) {
    res.status(200).send(user[0]);
  } else {
    next('Invalid user requested');
  }
});

app.use(errMiddleware);
app.listen(3004);

module.exports = app;
