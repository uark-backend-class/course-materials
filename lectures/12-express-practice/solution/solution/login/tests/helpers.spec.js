
const chai = require('chai');
const mockery = require('mockery');
const sinon = require('sinon');

const expect = chai.expect;

let helpers;
describe('Helper Functions', () => {
    before(() => {
        mockery.enable({
            useCleanCache: true,
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        let requestStub = sinon.stub().resolves({res: {}, body: {}});

        mockery.registerMock('request-promise', requestStub);

        helpers = require('../helpers');
    });

    after(() => {
        mockery.disable();
    });

  it('should be an object', () => {
    expect(helpers).to.be.an('object');
    expect(helpers).to.have.all.keys([
      'sendRequest',
      'validateUser'
    ]);
  });

  describe('sendRequest', () => {
    it('should be a function', () => {
      expect(helpers.sendRequest).to.be.a('function');
    });

    it('should return a promise', () => {
      const result = helpers.sendRequest('http://localhost:3006');
      expect(result.then).to.be.a('function');
      result.then(() => {done();});
    });

    it('should return an object with a res and body property', (done) => {
      helpers.sendRequest('http://localhost:3006')
        .then((response) => {
          expect(response).to.be.an('object');
          expect(response).to.have.all.keys([
            'res',
            'body'
          ]);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    // it('should return a 404 error when calling a nonexistent url', (done) => {
    //
    //   helpers.sendRequest('http://localhost:3004/notaurl').then((result) => {
    //
    //   }).catch((err) => {
    //     expect(err).to.not.be.null;
    //     done();
    //   });
    // });
  });

  describe('validateUser', () => {
    it('should be a function', () => {
      expect(helpers.validateUser).to.be.a('function');
    });

    it('should return true if the username and passwords match', () => {
      const users = [
        { username: 'bob', password: 'pass213' },
        { username: 'kyle', password: 'pass312' },
        { username: 'cindy', password: 'pass231' }
      ];

      const result = helpers.validateUser(users, { username: 'bob', password: 'pass213' } );
      expect(result).to.be.true;
    });

    it('should return false if the username and passwords match', () => {
      const users = [
        { username: 'bob', password: 'pass213' },
        { username: 'kyle', password: 'pass312' },
        { username: 'cindy', password: 'pass231' }
      ];

      const result = helpers.validateUser(users, { username: 'bob', password: 'pass231' } );
      expect(result).to.be.false;
    });
  });
});
