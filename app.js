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


app.listen(3000, () => console.log('Scoreboard on port 3000!'))