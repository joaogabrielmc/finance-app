const express = require('express')
const router = express.Router()
const financeController = require('../controllers/finances')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, financeController.getfinance)

router.post('/createTransaction', financeController.createTransaction)

router.delete('/deleteTransaction', financeController.deleteTransaction)

module.exports = router