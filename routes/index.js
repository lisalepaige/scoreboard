var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('./home', {
        title: 'Home'
    });
});

router.get('/controle', function (req, res) {  
    res.render('./controle', {
        title: 'Controle Panel'
    });
})

module.exports = router;