"use strict";

var mongoose = require('mongoose');
var financechema = new mongoose.Schema({
  transaction: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Transaction', financechema);