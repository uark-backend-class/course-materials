const isLoggedIn = require('../middleware/is-logged-in.mw');

module.exports = function (passport) {
  var router = require('express').Router();

  router.get('/', (req, res) => {
    res.status(200).sendFile(process.cwd() + '/assets/index.html');
  });

  router.get('/login', passport.authenticate('github', { scope: ['user:email'] }));

  router.get(
    '/login/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => { res.redirect('/secrets');
  });

  router.get('/secrets', isLoggedIn, function (req, res) {
    res.status(200).sendFile(process.cwd() + '/assets/secrets.html');
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  return router;
};
