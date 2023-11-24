"use strict";

var express = require('express');
var router = express.Router();
var financeController = require('../controllers/finances');
var _require = require('../middleware/auth'),
  ensureAuth = _require.ensureAuth;
router.get('/', ensureAuth, financeController.getfinance);
router.post('/createTransaction', financeController.createTransaction);
router["delete"]('/deleteTransaction', financeController.deleteTransaction);
module.exports = router;