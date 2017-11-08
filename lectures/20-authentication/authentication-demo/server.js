const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

const routes = require('./routes')(passport);
const configPassport = require('./configs/passport.config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/authdemo', { useMongoClient: true });

configPassport(passport);
const app = express();

app.use(session({ secret: 'menagerie of monkeys', resave: false, saveUninitialized: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/assets', express.static(process.cwd() + '/assets'));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
