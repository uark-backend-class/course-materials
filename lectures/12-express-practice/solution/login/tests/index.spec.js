const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

let trackingService;
let userService;

describe('Routes', () => {
  var server = require('../index');
  describe('GET /', () => {
    it('should return 200 and a message', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to my login app!');
          done();
        });
    });
  });

  describe('POST /', () => {
    const user = {
        username: 'inewton',
        password: 'gravityitsthelaw'
    };

    before(() => {
      trackingService = require('../../tracking/index');
      userService = require('../../users/index');
    });

    it('should return a 200 status and the user when login is successful', (done) => {
      chai.request(server)
        .post('/')
        .send({ username: 'inewton', password: 'gravityitsthelaw' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.deep.equal(user);
          done();
        });
    });
  });

  it('should return a 401 when incorrect credentials are provided', (done) => {
    chai.request(server)
      .post('/')
      .send({ username: 'inewton', password: 'incorrectpw' })
      .end((err, res) => {
        expect(err).to.not.be.null;
        expect(res).to.have.status(401);
        done();
      });
  });

  it('should return a 401 when too many login attempts have been made', (done) => {
    const app = chai.request(server);
    app
      .post('/')
      .send({ username: 'inewton', password: 'gravityitsthelaw' })
      .then(() => {
        return app.post('/').send({ username: 'inewton', password: 'gravityitsthelaw' });
      })
      .then(() => {
        return app.post('/').send({ username: 'inewton', password: 'gravityitsthelaw' });
      })
      .then(() => {
        return app.post('/').send({ username: 'inewton', password: 'gravityitsthelaw' });
      })
      .then(() => {
        return app.post('/').send({ username: 'inewton', password: 'gravityitsthelaw' });
      })
      .then((res) => {
        return app.post('/').send({ username: 'inewton', password: 'gravityitsthelaw' });
      })
      .catch((err) => {
        expect(err).to.not.be.null;
        expect(err).to.have.status(401);
        done();
      });
  });
});
