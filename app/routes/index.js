var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  var base_path = path.dirname(require.main.filename);
  base_path = path.dirname(base_path);
  res.sendFile(path.join(base_path, '/views/data_retrieval.html'));
});

module.exports = router;