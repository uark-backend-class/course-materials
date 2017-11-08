# Logging

## What is it?

Logging is a way of tracking when things go wrong in your application. It's the writing of error messages to files on the physical disk. These files can then be inspected and analyzed to identify places where the application can be improved.

### Fundamentals

#### Requirements for Logging

*Timestamps*

The "when" that captures when the event occurred and can provide context.

*Formatting*

The ability to output logs in a format that can be quickly parsed by humans and / or computers.

*File Location*

The ability to route logging to the appropriate destination. Some say that this should always be routed through `stdout`, but that's not always possible.

*Log Levels*

Not every log statement is equal. The support of different log levels (i.e. `debug`, `info`, `warn`, `error`) allow for differentiation of logging between Node environments. This can also be used to help determine how much information is shown.

The standard order for log levels is (taken from the Bunyan documentation):

- fatal (60): The service/app is going to stop or become unusable now. An operator should definitely look into this soon.
- error (50): Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this soon(ish).
- warn (40): A note on something that should probably be looked at by an operator eventually.
- info (30): Detail on regular operation.
- debug (20): Anything else, i.e. too verbose to be included in "info" level.
- trace (10): Logging from external libraries used by your app or very detailed application logging.

#### Do's and Don'ts

- Do not log credentials or other sensitive information
- Do not log when running tests (this can be turned off via an environment variable)
- Do log as much as possible at lower log Levels
- Do only log important information and errors in production
- Do store your log file outside of the project directory. `/log/` or `/logs` are common
- Do rotate and compress your log files
- Do add as much context as possible from parameters, query params and headers (when possible)

## Bunyan

Bunyan is a logger for Node.js that provides a high amount of customization.

### Installation

`npm install bunyan`

See Exercise 1 solution for an example of integrating Bunyan into a simple project.

### Usage

Let's refactor the application from Exercise 1 to make it more closely resemble a "production" app.

_package.json_:

```json
{
  "name": "app-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "prod": "export ENV=prod; export PORT=8080; node index.js",
    "dev": "export ENV=dev; node index.js | bunyan -o short"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bunyan": "^1.8.12",
    "express": "^4.16.2",
    "node-emoji": "^1.8.1"
  }
}
```

In the above, the output when running in `dev` will be piped to Bunyan. This "pretty" prints Bunyan log messages to the console (note: this requires Bunyan to be installed globally).

_routes/index.js_:

```js
const router = require('express').Router();
const emoji = require('node-emoji');

router.get('/', (req, res) => {
  const greeting = emoji.emojify(':balloon: :tada:  HAPPY HAPPY :confetti_ball:  JOY JOY :tada: :balloon:');
  res.status(200).send(greeting);
});

router.get('/countdown/:nbr', (req, res) => {
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

module.exports = router;
```

_middleware/500.js_:

```js
module.exports = function (err, req, res, next) {
  res.status(500).send(err);
};
```

In the above, we create middleware to catch server errors.

_index.js_:

```js
const express = require('express');
const bunyan = require('bunyan');

const routes = require('./routes');
const err500Middleware = require('./middleware/500');

const app = express();
const logger = bunyan.createLogger({name: 'countdown'});
const port = process.env.PORT || 3000

app.use('/', routes);
app.use(err500Middleware);

app.listen(3000, () => {
  logger.info('Application listening on port 3000...');
});
```

Now that our app is a bit more organized, let's add more robust logging. The first thing to consider is that we will likely want to log information in our routes. There are a few ways to accomplish this, but one of the most common ways is to create middleware that will attach a logger to the request object. This should be done _before_ the routes are registered.

_middleware/logging.js_:

```js
module.exports = function (logger) {
  return function (req, res, next) {
    req.log = logger;
    next();
  };
};
```

The above will allow us to register the middleware and pass it the logger. The returned function will be the actual middleware, and it will have access to the logger because of closure.

_index.js_:

```js
const express = require('express');
const bunyan = require('bunyan');

const routes = require('./routes');
const loggingMiddleware = require('./middleware/logging');
const err500Middleware = require('./middleware/500');

const app = express();
const logger = bunyan.createLogger({name: 'countdown'});
const port = process.env.PORT || 3000

app.use(loggingMiddleware(logger));
app.use('/', routes);
app.use(err500Middleware);

app.listen(port, () => {
  logger.info('Application listening on port ' + port + '...');
});
```

The logging middleware should be registered early on in the middleware stack so that the logging functions are available to all subsequent middleware. Now let's update the `500` error middleware to log the error when it occurs.

_middleware/500.js_:

```js
module.exports = function (err, req, res, next) {
  req.log.warn(err);
  res.status(500).send('Internal server error: ' + err.message);
};
```

The next thing we want to consider is to update the logging in the route itself to replace the `console.log` statement.

_routes/index.js_:

```js
const router = require('express').Router();
const emoji = require('node-emoji');

router.get('/', (req, res) => {
  req.log.info('GET /');
  const greeting = emoji.emojify(':balloon: :tada:  HAPPY HAPPY :confetti_ball:  JOY JOY :tada: :balloon:');
  res.status(200).send(greeting);
});

router.get('/countdown/:nbr', (req, res) => {
  req.log.info('GET /countdown/' + req.params.nbr);
  let starting = req.params.nbr;
  const startTime = Date.now();

  const countDown = setInterval(() => {
    starting--
    req.log.info('Counting down: ' + starting);
    if (starting === 0) {
      clearInterval(countDown);
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toString();
      req.log.debug('Request finished after ' + totalTime + 's')
      res.status(200).send(emoji.emojify(':stopwatch:  ' + totalTime + 's\n'));
    }
  }, 1000);
});

module.exports = router;
```

This is looking great. The next step is to differentiate the prod environment vs the dev environment. In general, the prod environment should only log the highest of log levels. This typically means `warn` and above, but can also be relegated to `error` and above.

The way to manage this output with Bunyan is to edit the "streams." This is also the way we manage _where_ the information is logged.

_index.js_:

```js
const express = require('express');
const bunyan = require('bunyan');

const routes = require('./routes');
const loggingMiddleware = require('./middleware/logging');
const err500Middleware = require('./middleware/500');

const app = express();
const logger = bunyan.createLogger({
  name: 'countdown',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      level: 'error',
      path: './countdown-error.log'
    }
  ]
});
const port = process.env.PORT || 3000

app.use(loggingMiddleware(logger));
app.use('/', routes);
app.use(err500Middleware);

app.listen(port, () => {
  logger.info('Application listening on port ' + port + '...');
});
```

This would be a very simple way to set this up for development logging. Anything logged between `debug` and `error` would be logged to `stdout` (i.e. the terminal window). `error` and above would be written to a file named `countdown-error.log`.

However, this doesn't take care of the need to log differently depending on the environment. In general, our goal is to:

- In development, log debug and higher to the console
- In production, log only warn and higher to a file

_logger.js_:

```js
const bunyan = require('bunyan');

module.exports = function (env) {
  return bunyan.createLogger({
    name: 'countdown',
    streams: determineStreams(env)
  });
};

function determineStreams (env) {
  if (env === 'prod') {
    return [
      {
        level: 'warn',
        path: './countdown-error.log'
      }
    ];
  }

  return [
    {
      level: 'debug',
      stream: process.stdout
    }
  ];
}
```

_index.js_:

```js
const express = require('express');

const routes = require('./routes');
const loggingMiddleware = require('./middleware/logging');
const err500Middleware = require('./middleware/500');
const createLogger = require('./logger');

const app = express();
const env = (process.env.ENV === 'prod') ? 'prod' : 'dev';
const logger = createLogger(env);
const port = process.env.PORT || 3000

app.use(loggingMiddleware(logger));
app.use('/', routes);
app.use(err500Middleware);

app.listen(port, () => {
  logger.info('Application listening on port ' + port + '...');
});
```

Lastly, let's create a route that forces an error so that we can test our 500 middleware (and production logging).

_routes/index.js_:

```js
const router = require('express').Router();
const emoji = require('node-emoji');

router.get('/', (req, res) => {
  req.log.info('GET /');
  const greeting = emoji.emojify(':balloon: :tada:  HAPPY HAPPY :confetti_ball:  JOY JOY :tada: :balloon:');
  res.status(200).send(greeting);
});

router.get('/countdown/:nbr', (req, res) => {
  req.log.info('GET /countdown/' + req.params.nbr);
  let starting = req.params.nbr;
  const startTime = Date.now();

  const countDown = setInterval(() => {
    req.log.info('Counting down: ' + starting);
    starting--
    if (starting === 0) {
      clearInterval(countDown);
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toString();
      req.log.debug('Request finished after ' + totalTime + 's')
      res.status(200).send(emoji.emojify(':stopwatch:  ' + totalTime + 's\n'));
    }
  }, 1000);
});

router.get('/error', (req, res, next) => {
  next(new Error('Oh no!'));
});

module.exports = router;
```
