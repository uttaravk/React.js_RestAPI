var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  var base_path = path.basename(path.dirname("data_retrieval.html"));
  res.sendFile(path.join(base_path, 'data_retrieval.html'));
});

module.exports = router;