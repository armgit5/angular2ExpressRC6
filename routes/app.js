var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('hitting / page');
    res.json({
        message: 'test'
    })
});

module.exports = router;
