var express = require('express');
const shirt_controlers= require('../controllers/shirt');
var router = express.Router();

/* GET home page. */
router.get('/', shirt_controlers.shirt_view_all_Page );

module.exports = router;
