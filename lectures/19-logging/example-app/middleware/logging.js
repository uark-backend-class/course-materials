module.exports = function (logger) {
  return function (req, res, next) {
    req.log = logger;
    return next();
  };
};
