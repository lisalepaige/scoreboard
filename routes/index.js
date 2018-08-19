var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var assert = require('assert');

var online = "mongodb://adminlepaige:Webtech3Admin@ds123500.mlab.com:23500/scoreboard";

router.use(bodyParser.json());

router.get('/', function (req, res) {
    var item; //1
    //var item2; // 2de collectie
    //connect
    mongo.connect(online, function (err, db) {
        console.log("connected");
        assert.equal(null, err);
        // get database
        var dbo = db.db("scoreboard");
        // get last item back 
        var coll1 = dbo.collection("team1").find();  
        var coll2 = dbo.collection("team2").find();
        var coll3 = dbo.collection("updates").find();  
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            console.log('start' + doc.score1);
            item = doc;
            //console.log(item); 
        },
          /*coll2.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc.team2);
           // item = doc;
          }, */
          /*coll3.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc.update);
           //item = doc;
          },*/ function () {
            // callback -> after: close db, render get page with item
            db.close();

 console.log('----' + item); 
    
            res.render('./scoreboard', {
                title: 'Scoreboard',
                team1: item.team1,
                score1: item.score1,
                shots1: item.shots1,
                fouls1: item.fouls1
                /*score1: item.score1,
                shots1: item.shots1*/
            });

        });
    });
});

router.get('/scoreboard', function (req, res) {
    var item; //1
    //var item2; // 2de collectie
    //connect
    mongo.connect(online, function (err, db) {
        console.log("connected");
        assert.equal(null, err);
        // get database
        var dbo = db.db("scoreboard");
        // get last item back 
        var coll1 = dbo.collection("team1").find();  
        var coll2 = dbo.collection("team2").find();
        var coll3 = dbo.collection("updates").find();  
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            console.log('start' + doc.score1);
            item = doc;
            //console.log(item); 
        },
          /*coll2.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc.team2);
           // item = doc;
          }, */
          /*coll3.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc.update);
           //item = doc;
          },*/ function () {
            // callback -> after: close db, render get page with item
            db.close();

 console.log('----' + item); 
    
            res.render('./scoreboard', {
                title: 'Scoreboard',
                team1: item.team1,
                score1: item.score1,
                shots1: item.shots1,
                fouls1: item.fouls1
                /*score1: item.score1,
                shots1: item.shots1*/
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
        var coll1 = dbo.collection("team1").find();  
        var coll2 = dbo.collection("team2").find();
        var coll3 = dbo.collection("updates").find();  
        coll1.forEach(function (doc, err) {
            assert.equal(null, err);
            //console.log('--- Get items ---');
            //console.log(doc);
            item = doc;
          }, function () {
            // callback -> after: close db, render get page with item
            db.close();
    
            res.render('./admin', {
                title: 'Control Panel'
            });
        });
    });   
});

router.post('/admin', function (req, res, next) {
    var items1 = {
        team1: req.body.team1,
        score1: req.body.score1,
        shots1: req.body.shots1,
        fouls1: req.body.fouls1
    };
    var items2 = {
        team2: req.body.team2,
        score2: req.body.score2,
        shots2: req.body.shots2,
        fouls2: req.body.fouls2
    };
    var items3 = { update: req.body.update}

    // connect to mongo db
    mongo.connect(online, function (err, db) {
    assert.equal(null, err);
    // access database, use collection to insert item 
    db.db('scoreboard').collection('team1').insertOne(items1, function (err, result) {
      // callback (if no errors)
      assert.equal(null, err);
      console.log('--- Item inserted ---');
      console.log(items1);
      db.close();
    });
  });
});

module.exports = router;