const express = require('express')
const BodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://localhost/nodedemo');

app.use(bodyParser.json());
app.use("/", require('./routes/index'));
app.use("/messages", require('./routes/messages'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))