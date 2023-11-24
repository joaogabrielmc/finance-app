"use strict";

var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/User');
module.exports = function (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, function (email, password, done) {
    User.findOne({
      email: email.toLowerCase()
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          msg: "Email ".concat(email, " n\xE3o encontrado.")
        });
      }
      if (!user.password) {
        return done(null, false, {
          msg: 'Conta registrada'
        });
      }
      user.comparePassword(password, function (err, isMatch) {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, {
          msg: 'Senha ou Email Inválido.'
        });
      });
    });
  }));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      return done(err, user);
    });
  });
};