"use strict";

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('express-flash');
var logger = require('morgan');
var connectDB = require('./config/database');
var mainRoutes = require('./routes/main');
var transactionRoutes = require('./routes/finance');
require('dotenv').config();
require('./config/passport')(passport);
connectDB();
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(logger('dev'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/', mainRoutes);
app.use('/finance', transactionRoutes);
app.listen(process.env.PORT, function () {
  console.log("Servidor iniciado na porta ".concat(process.env.PORT, "!"));
});