# Express

## What is Express?

[Express](http://expressjs.com/) is a web framework for Node.js that specializes in building small and performant APIs. It was originally released in 2010 by TJ Holowaychuk, and in 2014 IBM-owned StrongLoop took over rights to manage the project. Express is now also part of the Node.js Foundation.

There are several alternatives to Express:

- [Koa](http://koajs.com/)
- [Feathers](http://feathersjs.com/)
- [Nodal](http://www.nodaljs.com/)
- [Sails](http://sailsjs.com/)
- [Hapi](https://hapijs.com/)

Of the alternatives, Koa, Sails and Hapi are the most popular. Sails and Feathers are both built _on top_ of Express (i.e. they have the same Express functionality, but add features).

Despite many alternatives, Express continues to be the most popular web framework for Node.js, and is very flexible.

## Creating Our First Express App

Before creating our first Express app, let's review what our first Node web server looked like:

```js
const http = require('http');

const server = http.createServer((request, response) => {
  response.write('Hello from my first server!');
  response.end();
});

server.listen(3000);
console.log('Server listening on port 3000');
```

### Step One: Install Express via NPM

`npm init -y && npm install express --save`

### Step Two: Require and Initialize

_index.js_:

```js
const express = require('express');
const app = express();
```#

Wait... what? Why are we invoking the module? Express exports a function from its module, named `createApplication`. This function sets up the entire Express app and all dependencies / inheritance required.

### Step Three: Setup Root Route

```js
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello from my first Express app!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

`app.get` takes two arguments:

  - A string representing the route (i.e. `/` or `/puppies`)
  - A callback function specifying what to send as a response

Notice how concise this code is, and how easy it is to read. We didn't have to `end` the connection. Indeed, the beauty in Express is that it will take care of a lot of the Node functionality under the hood and make our APIs easier to create and reason about.

## Routing

Let's expand on routing a bit, though. It's common practice to put your routes in their own directory and to organize them in a way that meets the needs of the API.

Here's an overview of the API structure we'll be using for these examples:

```
/ - root
  /puppies
    /puppies/:id
  /kitties
    /kitties/:id
```

### API documentation

It's common to document different routes and the HTTP verbs associated with them. Let's do that for the above structure.

*GET /*

- Desc: Root
- Response: 200 text/html
- Data: "Welcome to Puppies and Kitties!"

*GET /kitties*

- Desc: Returns all kitties
- Response: 200 text/html
- Data: [{}, {}, {}]

*GET /kitties/:id*

- Desc: Returns a single kitty represented by its `id`
- Response: 200 application/json
- Data: {}

*POST /kitties*

- Desc: Creates and returns a new kitty
- Response: 200 application/json
- Data: {}

*PUT /kitties/:id*

- Desc: Updates and returns the matching kitty
- Response: 200 application/json
- Data: {}

*GET /puppies*

- Desc: Returns all puppies
- Response: 200 application/json
- Data: [{}, {}, {}]

*GET /puppies/:id*

- Desc: Returns a single puppy represented by its `id`
- Response: 200 application/json
- Data: {}

*POST /puppies*

- Desc: Creates and returns a new puppy
- Response: 200 application/json
- Data: {}

*PUT /puppies/:id*

- Desc: Updates and returns the matching puppy
- Response: 200 application/json
- Data: {}

Our puppy/kitty objects will look like:

```js
{
  id: number,
  name: string,
  breed: string,
  likes: array,
  dislikes: array
}
```

### Creating the Router

Within the root file, we need to tell the Express application where to find our soon-to-be-created routes. So we'll create a `routes` Node module within our project and tell it to look there. This means that we'll need to `require` that module in the `index.js` file.

_index.js_:

```js
const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
```

`app.use` is an Express method for setting up Middleware in Express. We will talk more about Middleware next Wednesday and Saturday. For now, just know that it is used to setup the route.

Let's go ahead and setup the route file now:

_/routes/index.js_:

```js
const router = require('express').Router();

router.get('/', (request, response) => {
  response.status(200).send('Welcome to Puppies and Kitties!');
});

module.exports = router;
```

Here, we've imported the Express router, and added a GET method for the root URL that will return a string and status of 200. Since we need to make the routes available to the remainder of the application, we need to make sure that we export the router object at the end.

From here, we can split this off into different logical subfolders based on the structure of our API. From our API definition, it looks like we'll have logical paths for both `/kitties` and `/puppies`, so it makes sense to put those routes in their own folders.

Our folder structure should now look like:

```
/ root
  |-  routes
  |     |-  kitties
  |     |     |-  index.js
  |     |
  |     |-  index.js
  |
  |-  index.js
```

```
/ root
  |-  routes
  |     |-  kitties
  |     |     |-  index.js
  |     |
  |     |-  puppies
  |     |     |-  index.js
  |     |
  |     |-  index.js
  |
  |-  index.js
```

Next create the `/kitties` route. Before we create the actual kitties route file, we need to tell the main route file in `/routes/index.js` to look for our `kitties` file when `/kitties` is called in the browser.

_routes/index.js_:

```js
const router = require('express').Router();

const kitties = require('./kitties');

router.get('/', (request, response) => {
  response.status(200).send('Welcome to Puppies and Kitties!');
});

router.use('/kitties', kitties);

module.exports = router;
```

_/routes/kitties/index.js_:

```js
const router = require('express').Router();

const kitties = [
  {
    id: 1,
    name: 'Socks',
    breed: 'Tuxedo',
    likes: ['catnip', 'cuddles'],
    dislikes: ['puppies']
  },
  {
    id: 2,
    name: 'Muffin',
    breed: 'Tabby',
    likes: ['snacks', 'sunshine'],
    dislikes: ['vacuums']
  },
  {
    id: 3,
    name: 'Sam',
    breed: 'Siamese',
    likes: ['clawing things', 'trees'],
    dislikes: ['toys meant for clawing']
  }
];

router.get('/', (request, response) => {
  response.status(200).json(kitties);
});

router.get('/:id', (request, response) => {
  let kitty;
  for (let i = 0; i < kitties.length; i++) {
    if (request.params.id.toString() === kitties[i].id.toString()) {
      kitty = kitties[i];
    }
  }

  response.status(200).json(kitty);
});

module.exports = router;
```

Moving onto the puppies routes. First, we should update our core router and add the puppies module.

_routes/index.js_:

```js
const router = require('express').Router();

const kitties = require('./kitties');
const puppies = require('./puppies');

router.get('/', (request, response) => {
  response.status(200).send('Welcome to Puppies and Kitties!');
});

router.use('/kitties', kitties);
router.use('/puppies', puppies);

module.exports = router;
```

_/routes/puppies/index.js_:

```js
const router = require('express').Router();

const puppies = [
  {
    id: 1,
    name: 'Fluffykins',
    breed: 'Labradoodle',
    likes: ['naps', 'bones', 'cuddles'],
    dislikes: ['milk']
  },
  {
    id: 2,
    name: 'Sprinkles',
    breed: 'Dalmatian',
    likes: ['petting', 'snacks', 'swimming'],
    dislikes: ['all other animals', 'Dachshunds']
  },
  {
    id: 3,
    name: 'Bibblyboo',
    breed: 'Pug',
    likes: ['snoring'],
    dislikes: ['Dalmatians', 'trees']
  },
  {
    id: 4,
    name: 'Fred',
    breed: 'Frenchie',
    likes: ['snark', 'chasing rabbits', 'turkey'],
    dislikes: ['birds', 'squirrels', 'uneven bedding']
  }
];

router.get('/', (request, response) => {
  response.status(200).json(puppies);
});

router.get('/:id', (request, response) => {
  let puppy;
  for (let i = 0; i < puppies.length; i++) {
    if (request.params.id.toString() === puppies[i].id.toString()) {
      puppy = puppies[i];
    }
  }

  response.status(200).json(puppy);
});

module.exports = router;
```

### POST and PUT

To add the post routes, we're going to have to include something called the body-parser middleware. Again, we will talk in depth about middleware in next week's lecture, but for now know that the body-parser middleware will inspect the body property provided in the request, and turn it into a format that Express can recognize. Since we're sending our information across as JSON, we need it to interpret the JSON for us.

`npm install body-parser --save`

_index.js_:

```js
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
```

It's important to know that the `app.use` statements are processed *in the order they are listed*. This means that it's important for us to setup the body parser before we setup the routes, so that the routes can then use the body parser.

We can now setup our POST and PUT request.

_/routes/kitties/index.js_:

```js
const router = require('express').Router();

const kitties = [
  {
    id: 1,
    name: 'Socks',
    breed: 'Tuxedo',
    likes: ['catnip', 'cuddles'],
    dislikes: ['puppies']
  },
  {
    id: 2,
    name: 'Muffin',
    breed: 'Tabby',
    likes: ['snacks', 'sunshine'],
    dislikes: ['vacuums']
  },
  {
    id: 3,
    name: 'Sam',
    breed: 'Siamese',
    likes: ['clawing things', 'trees'],
    dislikes: ['toys meant for clawing']
  }
];

router.get('/', (req, res) => {
  res.status(200).json(kitties);
});

router.get('/:id', (req, res) => {
  const kitty = getKitty(kitties, req.params.id);

  res.status(200).json(kitty);
});

router.post('/', (req, res) => {
  const kittyId = req.body.id;
  kitties.push(req.body);
  const kitty = getKitty(kitties, kittyId);
  res.status(200).json(kitty);
});

router.put('/:id', (req, res) => {
  const kitty = updateKitty(kitties, req.body, req.params.id);
  res.status(200).json(kitty);
});

function getKitty (arr, id) {
  let kitty;
  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      kitty = arr[i];
    }
  }
  return kitty;
}

function updateKitty (arr, newKitty, id) {
  let kitty;
  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      arr[i].name = newPuppy.name;
      arr[i].breed = newPuppy.breed;
      arr[i].likes = newPuppy.likes;
      arr[i].dislikes = newPuppy.dislikes;

      kitty = arr[i];
    }
  }
  return kitty;
}

module.exports = router;
```

### Query Parameters

Finally, we want to add the ability to sort the array by name, so we'll add that as a query parameter to `GET /kitties`.

_/kitties/index.js_:

```js
const router = require('express').Router();

const kitties = [
  {
    id: 1,
    name: 'Socks',
    breed: 'Tuxedo',
    likes: ['catnip', 'cuddles'],
    dislikes: ['puppies']
  },
  {
    id: 2,
    name: 'Muffin',
    breed: 'Tabby',
    likes: ['snacks', 'sunshine'],
    dislikes: ['vacuums']
  },
  {
    id: 3,
    name: 'Sam',
    breed: 'Siamese',
    likes: ['clawing things', 'trees'],
    dislikes: ['toys meant for clawing']
  }
];

router.get('/', (req, res) => {
  const kittyArray = (req.query.sort === 'breed') ? sortByBreed(kitties) : kitties;
  res.status(200).json(kittyArray);
});

router.get('/:id', (req, res) => {
  const kitty = getPuppy(kitties, req.params.id);

  res.status(200).json(kitty);
});

router.post('/', (req, res) => {
  const kittyId = req.body.id;
  kitties.push(req.body);
  const kitty = getKitty(kitties, kittyId);
  res.status(200).json(kitty);
});

router.put('/:id', (req, res) => {
  const kitty = updateKitty(kitties, req.body, req.params.id);
  res.status(200).json(kitty);
});

function getKitty (arr, id) {
  let kitty;
  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      kitty = arr[i];
    }
  }
  return kitty;
}

function updateKitty (arr, newKitty, id) {
  let kitty;
  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      arr[i].name = newPuppy.name;
      arr[i].breed = newPuppy.breed;
      arr[i].likes = newPuppy.likes;
      arr[i].dislikes = newPuppy.dislikes;

      kitty = arr[i];
    }
  }
  return kitty;
}

function sortByBreed (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr.sort((a, b) => {
    if (a.breed.toUpperCase() < b.breed.toUpperCase()) {
      return -1;
    }
    if (a.breed.toUpperCase() > b.breed.toUpperCase()) {
      return 1;
    }

    return 0;
  });
}

module.exports = router;
```

## Middleware

### What is it?

Middleware is code that gets executed between the time that a request is received and a response is sent. The middleware has access to the request and response objects, and can manipulate both before proceeding to the next middleware (or the route). Routes in Express can _also_ be considered middleware. In a typical application, the middleware will consist of several pieces of code (i.e. a stack of middleware) that gets executed each time a request is received. The server processes middleware in the order in which it is registered, therefore _order is very important for middleware_.

## Simple Example

_index.js_:

```js
const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
  console.log('Hello from my first middleware!');
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.status(200).send('Howdy');
});

app.listen(3000);
```

Middleware is just a function that has access to `req`, `res`, `next`. `next` is a function that tells Express that processing is finished in the current middleware and that it should move onto the next middleware function in the stack.

## Types of Middleware

There are 5 Types of Middleware in Express:
  - Application-level
  - Route-level
  - Error-handling
  - Built-in
  - 3rd-party

### Application-level

Middleware used on every incoming request, throughout the application. Route functions registered via `app.METHOD` are considered application-level middleware. Additionally, any middleware registered with `app.use` is considered to be application-level. The first example we created above would be considered application-level middleware.

### Router-level

Router-level middleware performs in the same manner as application level middleware, with the exception that it is bound to an instance of a router. There are a few ways to accomplish this:

_index.js_:

```js
const express = require('express');
const router = require('./router');

const app = express();

const appMiddleware = (req, res, next) => {
  console.log('Hello from application middleware!');
  next();
};

const pigMiddleware = (req, res, next) => {
  console.log('Hello from route middleware for GET /flyingpigs');
  next();
};

app.use(appMiddleware);

app.get('/', (req, res) => {
  res.status(200).send('GET /');
});

// Method 1 adds the middleware within the route definition
app.get('/flyingpigs', pigMiddleware, (req, res) => {
  res.status(200).send('GET /flyingpigs');
});

app.use('/dragons', router);

app.listen(3000);
```

_router.js_:

```js
const router = require('express').Router();

const rootRouteMiddleware = (req, res, next) => {
  console.log('Hello from route middleware for GET /dragons');
  next();
};

// Method 2 registers within a specific route instance
router.use(rootRouteMiddleware);

router.get('/dragons', (req, res) => {
  res.status(200).send('GET /dragons');
});

module.exports = router;
```

### Error-handling

Error-handling middleware is handled a bit differently from the other methods. The function signature requires *4* arguments instead of 3. This is extremely important. If only 3 arguments are passed, then Express does not know it is error-handling middleware.

Also important to note is that any error-handling middleware needs to be the _last_ middleware registered (after routes and all other middleware). This is due to the fact that the error middleware is meant to "catch" when something goes wrong.

_index.js_:

```js
const express = require('express');
const app = express();

const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
};

app.get('/', (req, res, next) => {
  next(new Error('Bad things happened'));
});

app.use(errorMiddleware);

app.listen(3000);
```

### Built-in

The only built-in middleware is `express.static`. This method is used for serving static assets (images, fonts, css, etc) for websites. We'll use this in the future, but for now a general understanding is all that's required.

### 3rd-party

Third-party middleware is middleware imported from Node (read NPM) modules. Examples of this are `body-parser`, Bunyan logging, `cookie-parser`, etc. You will use this feature extensively, but it's important to keep in mind at the root, these work just like the examples listed above.

## Order Matters

As previously mentioned, middleware is processed in the order that it is registered. This is extremely important and the cause for a lot of errors. Typical order looks something like:

1. Built-in middleware
2. Application middleware (local & 3rd party)
3. Routes & router middleware
4. Application middleware (local & 3rd party)
5. Error-handling middleware

# Application Structure

Express applications typically lend themselves to an MVC (model-view-controller) application structure. The Model represents data and interaction with data storage. The view represents the template or front-end materials being sent to the browser. The Controller represents business logic. Note that sometimes business logic is lumped in with Model and that controller represents routing. Both of these definitions are valid, as MVC is a pattern and not a strict definition.

Let's look at some app structure examples:

```
project/
  assets/
  config/
  controllers/
  middleware/
  routes/
  services/
  utils/
  views/
  .gitignore
  index.js
  package.json
  README.md
```

In the above scenario:

- `assets` contains static files like images, css and javascript
- `config` contains all configuration files
- `controllers` handle routing logic, but not route definition
- `middleware` is the place for Express middleware
- `routes` is where the routing definitions are stored
- `services` is where the "models" are located, and handles any external API communication
- `utils` contains functionality shared across the app
- `views` is the location of any templates rendered by the application

Another example:

```
project/
  controllers/
  helpers/
  middleware/
  models/
  public/
  views/
  .gitignore
  app.js
  package.json
  README.md
```

In this app:

- `controllers` handles routing definition and logic
- `helpers` functions shared across the app
- `middleware` is the place for Express middleware
- `models` contains business logic and handles data storage
- `public` contains static files like images, css and javascript
- `views` is the location of any templates rendered by the application

Let's move onto something a bit more complicated:

```
project/
  bin/
  config/
  db/
  src/
    browser/
    server/
      controllers/
      models/
      views/
    shared/
  .gitignore
  index.js
  package.json
  README.md
```

- `bin` stores the actual executable for the server
- `config` contains all configuration files
- `db` contains database initialization / migration
- `src/browser/` contains static files like images, css and javascript
- `src/server/controllers` contains server routing and logic
- `src/server/models` contains database queries and business logic
- `src/server/views` is the location of any templates rendered by the application
- `server/shared` functions shared across the app

# Code Quality

The most important thing about code quality is to be consistent. The primary tool used to keep yourself accountable is called a linter. Linters analyze code as your write it and adhere to a set of rules. There are several popular linting options:

- ESLint
- JSHint
- JSLint

Of these, ESLint is the most modern and customizable. ESLint has [great documentation for getting started](http://eslint.org/docs/user-guide/getting-started), which we'll go through together.
