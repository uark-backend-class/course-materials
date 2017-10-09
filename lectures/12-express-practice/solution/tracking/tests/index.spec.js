const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Routes', () => {
  const server = require('../index');

  describe('GET /tracking', () => {
    it('should return an error when no query parameters are provided', (done) => {
      chai.request(server)
        .get('/tracking')
        .end((err, res) => {
          expect(err).to.not.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.equal('Internal server error: Incorrect query params provided: {}');
          done();
        });
    });

    it('should respond with a 200 if the attempt limit has not been exceeded', (done) => {
      chai.request(server)
        .get('/tracking?username=bob&currentDate=2017-02-06')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    
    it('should respond with a 403 when the request limit has been exceeded', (done) => {
      const app = chai.request(server);
      app
        .get('/tracking?username=bob&currentDate=2017-02-06')
        .then(() => {
          return app.get('/tracking?username=bob&currentDate=2017-02-06')
        })
        .then(() => {
          return app.get('/tracking?username=bob&currentDate=2017-02-06')
        })
        .then(() => {
          return app.get('/tracking?username=bob&currentDate=2017-02-06')
        })
        .then(() => {
          return app.get('/tracking?username=bob&currentDate=2017-02-06')
        })
        .then((res) => {
          return app.get('/tracking?username=bob&currentDate=2017-02-06')
        })
        .catch((err) => {
          expect(err).to.not.be.null;
          expect(err).to.have.status(403);
          done();
        });
    });
  });
});
