var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shirt', { title: 'Search Results Shirt' });
});

module.exports = router;
