var express = require('express');
var router = express.Router(); 

const alexaCntrl = require('../controllers/alexa');

router.get('/getTodaysJobOpenings', alexaCntrl.getTodaysJobOpenings);

module.exports = router;
