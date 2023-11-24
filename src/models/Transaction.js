const mongoose = require('mongoose')

const financechema = new mongoose.Schema({
  transaction: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Transaction', financechema)
