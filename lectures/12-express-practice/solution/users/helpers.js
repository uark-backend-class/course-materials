module.exports = {
  validateUser: validateUser,
  validateProp: validateProp,
  isTrue: isTrue
};

function validateUser (user) {
  const validation = [];

  if (user.id) {
    return false;
  }

  for (let prop in user) {
    if (validateProp(user, prop)) {
      validation.push(true);
    } else {
      validation.push(false);
    }
  }

  if (!validation.every(isTrue)) {
    return false;
  }

  return true;
}

function validateProp (user, propName) {
  if (!user[propName] || typeof user[propName] !== 'string' || user[propName] === '') {
    return false;
  }

  return true;
}

function isTrue (validationResult) {
  return validationResult === true;
}
