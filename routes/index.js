var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var Schema = mongoose.Schema;

//require models
const Team1 = require('../models/team1model');
const Team2 = require('../models/team2model');
const Update = require('../models/updatesmodel');

router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.render('./scoreboard', {
        title: 'Scoreboard'
    });
});

router.get('/scoreboard', function (req, res) {
    res.render('./scoreboard', {
        title: 'Scoreboard'
    });
});

router.get('/admin', function (req, res) {  
    res.render('./admin', {
        title: 'Control Panel'
    });
})

module.exports = router;