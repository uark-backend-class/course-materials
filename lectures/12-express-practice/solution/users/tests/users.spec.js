const chai = require('chai');
const users = require('../users');

const expect = chai.expect;

describe('User Module', () => {
  it('should be an array', () => {
    expect(users).to.be.an('array');
  });
  
  it('should have 5 users in it', () => {
    expect(users.length >= 5).to.be.true;
    expect(users[0]).to.be.an('object');
    expect(users[1]).to.be.an('object');
    expect(users[2]).to.be.an('object');
    expect(users[3]).to.be.an('object');
    expect(users[4]).to.be.an('object');
  });
});
