"use strict";

var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var homeController = require('../controllers/home');
var _require = require('../middleware/auth'),
  ensureAuth = _require.ensureAuth,
  ensureGuest = _require.ensureGuest;
router.get('/', homeController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
module.exports = router;