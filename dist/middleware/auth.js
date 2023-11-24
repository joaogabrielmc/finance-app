"use strict";

module.exports = {
  ensureAuth: function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/');
    }
  }
};