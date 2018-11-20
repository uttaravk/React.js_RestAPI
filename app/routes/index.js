var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index2', { title: 'Express' });
  res.sendFile('/Users/uttara/Documents/Projects/User_API/app/views/index2.html');
});

module.exports = router;
