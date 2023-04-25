var express = require('express');
const shirt_controlers= require('../controllers/shirt');
var router = express.Router();

/* GET home page. */
router.get('/', shirt_controlers.shirt_view_all_Page );

/* GET detail shirt page */
router.get('/detail', shirt_controlers.shirt_view_one_Page);

/* GET create shirt page */
router.get('/create', shirt_controlers.shirt_create_Page);
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}   
/* GET create update page */
router.get('/update',secured, shirt_controlers.shirt_update_Page);

/* GET delete shirt page */
router.get('/delete', shirt_controlers.shirt_delete_Page);

module.exports = router;
