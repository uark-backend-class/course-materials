const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const errorMiddleware = require('../err-middleware');

chai.use(sinonChai);
const expect = chai.expect;

describe('Error Middleware', () => {
  const res = {
    code: null,
    status: function (code) {
      this.code = code;
      return this;
    },
    send: sinon.spy()
  };
  const err = 'This is an error from my spy!';

  afterEach(() => {
    res.send.reset();
  });

  it('should be a function', () => {
    expect(errorMiddleware).to.be.a('function');
  });

  it('should set the status 401', () => {
    errorMiddleware(err, {}, res);
    expect(res.status).to.be.a('function');
    expect(res.code).to.equal(401);
  });

  it('should call res.send with the correct error message', () => {
    errorMiddleware(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Unable to log into the application: This is an error from my spy!')).to.be.true;
  });
});
