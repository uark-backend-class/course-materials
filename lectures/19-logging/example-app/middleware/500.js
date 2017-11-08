module.exports = function (err, req, res, next) {
  req.log.warn(err);
  res.status(500).send(err);
}
