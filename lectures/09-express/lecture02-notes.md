# Testing Routes

Testing your routes is important, and provides a way to ensure that you're providing the expected response from the API. As mentioned in a previous lecture, the tool we'll use to this is Chai-Http. Chai Http will allow us to start up the server and make a request to our routes.

We'll start by installing the necessary NPM modules and creating an Express app with a single GET route.

```bash
npm init -y
npm install express body-parser --save
npm install mocha chai chai-http --save-dev
```

_server.js_:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Testing routes is awesome!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
})

module.exports = app;
```

At the end of the file, we're exporting our app. This will allow us to require it in our test file(s). We'll create `server.spec.js`.

_server.spec.js_:

```js
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Testing routes is awesome!')
          done();
        });
    });
  });
});

```

Using `chai-http` gives Chai the ability to make HTTP requests to our server, which we pass in as the argument to the `chai.http` file. Next, we'll test a named route: `/tacos` (because of course). We'll need to add 1 additional test to ensure the result we're getting from the server is what we expect.


_server.js_:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Testing routes is awesome!');
});

app.get('/tacos', (req, res) => {
  res.status(200).send('Are delicious!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
})

module.exports = app;
```

_server.spec.js_:

```js
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Testing routes is awesome!')
          done();
        });
    });
  });

  describe('/tacos', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(server)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Are delicious!')
          done();
        });
    });
  });
});
```

We can also test other HTTP verbs, so let's see an example of what that looks like:

_server.js_:

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Testing routes is awesome!');
});

app.post('/', (req, res) => {
  res.status(200).json(req.body);
});

app.get('/tacos', (req, res) => {
  res.status(200).send('Are delicious!');
});

app.get('*', (req, res) => {
  res.status(404).send('Invalid URL');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
})

module.exports = app;
```

_server.spec.js_:

```js
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', ()  => {
  describe('/', () => {
    describe('GET', () => {
      it('should respond with a 200 when successful', (done) => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
      it('should respond with the correct message', (done) => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.html;
            expect(res.text).to.equal('Testing routes is awesome!')
            done();
          });
      });
    });
    describe('POST', () => {
      it('should respond with a 200 when successful', (done)  => {
        chai.request(server)
          .post('/')
          .send({ food: 'tacos' })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
      it('should respond the same object that was submitted', (done)  => {
        chai.request(server)
          .post('/')
          .send({ food: 'tacos' })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.json;
            expect(res.body).to.deep.equal({ food: 'tacos' });
            done();
          });
      });
    });
  });


  describe('/tacos', ()  => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(server)
        .get('/tacos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('Are delicious!')
          done();
        });
    });
  });

  describe('Error', () => {
    it('should respond with a 404 when an invalid url is used', (done) => {
      chai.request(server)
        .get('/notarealurl')
        .end((err, res) => {
          expect(err).to.not.be.null;
          expect(res).to.have.status(404);
          expect(res.text).to.equal('Invalid URL');
          done();
        });
    });
  });
});
```

## Testing

There are two common options for storing tests:

- Store them within a `tests` folder in the root of the project
- Store them next to the functional files you're testing and add a `.spec.js` suffix to the filename

Both of those options are valid. If the application is smaller, I prefer a separate `tests` directory. However, if the application is large, I prefer the tests to be in the same directory as the functional files.
