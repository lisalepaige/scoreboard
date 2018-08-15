var express = require('express');
var router = express.Router();

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