var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var assert = require('assert');

var online = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard"

router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.render('./scoreboard', {
        title: 'Scoreboard'
    });
});

router.get('/scoreboard', function (req, res) {
    var item;
    //connect
    mongo.connect(online, function (err, db) {
        console.log("connected");
        assert.equal(null, err);
        // get database
        var dbo = db.db("scoreboard");
        // get last item back 
        var cursor = dbo.collection("team1").find()  
        console.log(cursor);   
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            console.log('--- Get items ---');
            console.log(doc);
            item = doc;
          }, function () {
            // callback -> after: close db, render get page with item
            db.close();
    
            res.render('./scoreboard', {
                title: 'Scoreboard'
            });
        });
    });
});

router.get('/admin', function (req, res) {  
    res.render('./admin', {
        title: 'Control Panel'
    });
})

module.exports = router;