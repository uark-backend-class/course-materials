const request = require('request-promise');

module.exports = {
  sendRequest,
  validateUser
};

function sendRequest (url) {
  // return new Promise((resolve, reject) => {
  //   request(url, (err, res, body) => {
  //     if (err || !res) {
  //       reject(`There was an issue sending request to ${url}`);
  //     }
  //
  //     resolve({
  //       res: res,
  //       body: body || {}
  //     });
  //   });
  // });
  return request(url)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        throw new Error(`There was an issue sending request to ${url}`);
    });
}

function validateUser(userArray, currentUser) {
  const userRecordArray = userArray.filter((userObj) => {
    return userObj.username === currentUser.username;
  });
  const userRecord = userRecordArray[0];

  let passwordMatch = false;

  if (currentUser.password === userRecord.password) {
    passwordMatch = true;
  }

  return passwordMatch
}
