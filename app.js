const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

//mongoose.connect('mongodb://localhost/nodedemo');

app.use(BodyParser.json());
app.use("/", require('./routes/index'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './public/css')));

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});*/


app.listen(3000, () => console.log('Scoreboard listening on port 3000!'))