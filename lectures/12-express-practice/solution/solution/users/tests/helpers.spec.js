const chai = require('chai');
const helpers = require('../helpers');

const expect = chai.expect;

describe('Helper Functions', () => {
  it('should be an object', () => {
    expect(helpers).to.be.an('object');
    expect(helpers).to.have.all.keys([
      'validateUser',
      'validateProp',
      'isTrue'
    ]);
  });

  describe('validateUser()', () => {
    it('should be a function', () => {
      expect(helpers.validateUser).to.be.a('function');
    });

    it('should return true when a valid user object is provided', () => {
      const user = {
        username: 'beggs',
        firstName: 'Bacon',
        lastName: 'Eggs'
      };

      const result = helpers.validateUser(user);
      expect(result).to.equal(true);
    });

    it('should return false if the user object contains an id', () => {
      const user = {
        id: 'something-really-long-but-not-valid'
      };

      const result = helpers.validateUser(user);
      expect(result).to.equal(false);
    });

    it('should return false if an invalid user is provided', () => {
      const user = {
        username: ''
      };

      const result = helpers.validateUser(user);
      expect(result).to.equal(false);
    });
  });

  describe('validateProp', () => {
    it('should be a function', () => {
      expect(helpers.validateProp).to.be.a('function');
    });

    it('should return true when a valid property and user are passed', () => {
      const user = {
        firstName: 'Bacon'
      };

      const result = helpers.validateProp(user, 'firstName');
      expect(result).to.equal(true);
    });

    it('should return false when the property name does not exist in the user object', () => {
      const user = {
        falseProp: 'jam'
      };

      const result = helpers.validateProp(user, 'firstName');
      expect(result).to.equal(false);
    });

    it('should return false when the user object value is not a string', () => {
      const user = {
        falseProp: 42
      };

      const result = helpers.validateProp(user, 'falseProp');
      expect(result).to.equal(false);
    });

    it('should return false when the user object value is an empty string', () => {
      const user = {
        falseProp: ''
      };

      const result = helpers.validateProp(user, 'falseProp');
      expect(result).to.equal(false);
    });
  });

  describe('isTrue', () => {
    it('should be a function', () => {
      expect(helpers.isTrue).to.be.a('function');
    });

    it('should return true if the validation result is true', () => {
      expect(helpers.isTrue(true)).to.equal(true);
    });
    
    it('should return false if the validation result is false', () => {
      expect(helpers.isTrue(false)).to.equal(false);
    });
  });
});
