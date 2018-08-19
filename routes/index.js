var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var assert = require('assert');

var online = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard";

router.get('/', function (req, res) {
    var item;
    //connect
    mongo.connect(online, function (err, db) {
        console.log("connected");
        assert.equal(null, err);
        // get database
        var dbo = db.db("scoreboard");
        // get last item back 
        var coll1 = dbo.collection("teams").find();  
       
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            console.log('start' + doc);
            item = doc;
            //console.log(item); 
        },
        function () {
            // callback -> after: close db, render get page with item
            db.close();
    
            res.render('./scoreboard', {
                title: 'Scoreboard',
                team1: item.team1,
                score1: item.score1,
                shots1: item.shots1,
                fouls1: item.fouls1,
                team2: item.team2,
                score2: item.score2,
                shots2: item.shots2,
                fouls2: item.fouls2,
                updates: item.updates
            });

        });
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
        var coll1 = dbo.collection("teams").find();  
       
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            console.log('start' + doc);
            item = doc;
            //console.log(item); 
        },
        function () {
            // callback -> after: close db, render get page with item
            db.close();
    
            res.render('./scoreboard', {
                title: 'Scoreboard',
                team1: item.team1,
                score1: item.score1,
                shots1: item.shots1,
                fouls1: item.fouls1,
                team2: item.team2,
                score2: item.score2,
                shots2: item.shots2,
                fouls2: item.fouls2,
                updates: item.updates
            });

        });
    });
});

router.get('/admin', function (req, res) {
    var item;
    //connect
    mongo.connect(online, function (err, db) {
        console.log("connected");
        assert.equal(null, err);
        // get database
        var dbo = db.db("scoreboard");
        // get last item back 
        var coll1 = dbo.collection("teams").find();  
    
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc);
            item = doc;
          }, function () {
            // callback -> after: close db, render get page with item
            db.close();
    
            res.render('./admin', {
                title: 'Control Panel',
                score1: item.score1,
                shots1: item.shots1,
                fouls1: item.fouls1,
                score2: item.score2,
                shots2: item.shots2,
                fouls2: item.fouls2
            });
        });
    });   
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/admin', urlencodedParser, function (req, res, next) {
    var items1 = {
        team1: req.body.team1,
        score1: req.body.score1,
        shots1: req.body.shots1,
        fouls1: req.body.fouls1,
        team2: req.body.team2,
        updates: req.body.updates
    };    

    // connect to mongo db
    mongo.connect(online, function (err, db) {
    assert.equal(null, err);
    // access database, use collection to insert item 
    db.db('scoreboard').collection('teams').insertOne(items1, function (err, result) {
      // callback (if no errors)
      assert.equal(null, err);
      console.log('--- Item inserted ---');
      
      db.close();
    });
  });
   res.redirect('/admin');
});

module.exports = router;