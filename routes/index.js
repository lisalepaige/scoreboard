var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var assert = require('assert');

var online = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard"

// connect to mongo db
mongo.connect(online, function (err, db) {
    assert.equal(null, err);
    // access database, use collection to insert item 
    db.db('scoreboard').collection('team1').insertOne(item, function (err, result) {
      // callback (if no errors)
      assert.equal(null, err);
      console.log('--- Item inserted ---');
      console.log(item);
      db.close();
    });
});

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