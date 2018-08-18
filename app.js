const createError = require('http-errors');
const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(BodyParser.json());
app.use("/", require('./routes/index'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

var MongoClient = require('mongodb').MongoClient;
var local = "mongodb://localhost:27017";

//connection
var uri = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard";
mongoose.connect(uri, { useNewUrlParser: true });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;