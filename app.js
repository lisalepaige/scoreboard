const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(express.bodyParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/", require('./routes/index'));
var MongoClient = require('mongodb').MongoClient;
var local = "mongodb://localhost:27017";

//connection
var uri = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard";

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