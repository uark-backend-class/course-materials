module.exports = function (err, req, res, next) {
  res.status(401).send('Unable to log into the application: ' + err);
};