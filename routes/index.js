var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

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