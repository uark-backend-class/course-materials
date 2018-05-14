const express = require('express');
const emoji = require('node-emoji');
const bunyan = require('bunyan');
const routes = require('./routes');
const loggingMiddleware = require('./middleware/logging');
const err500Middleware = require('./middleware/500');
const createLogger = require('./logger');

const env = (process.env.ENV === 'prod') ? 'prod' : 'dev';
const logger = createLogger(env);
const app = express();

app.use(loggingMiddleware(logger));
app.use('/', routes);
app.use(err500Middleware);

app.listen(3000, () => {
  logger.info('Application listening on port 3000...');
});
