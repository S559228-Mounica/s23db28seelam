var express = require('express');
const shirt_controlers= require('../controllers/shirt');
var router = express.Router();

/* GET home page. */
router.get('/', shirt_controlers.shirt_view_all_Page );

/* GET detail shirt page */
router.get('/detail', shirt_controlers.shirt_view_one_Page);

/* GET create shirt page */
router.get('/create', shirt_controlers.shirt_create_Page)
module.exports = router;
