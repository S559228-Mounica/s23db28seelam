var shirt = require('../models/shirt');
// List of all shirt
// List of all shirt
exports.shirt_list = async function(req, res) {
    try{
    theshirt = await shirt.find();
    res.send(theshirt);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific shirt.
exports.shirt_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt detail: ' + req.params.id);
};
// Handle shirt create on POST.
exports.shirt_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shirt();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"shirt_type":"goat", "cost":12, "size":"large"}
    document.brand= req.body.brand;
    document.cost = req.body.cost;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle shirt delete form on DELETE.
exports.shirt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt delete DELETE ' + req.params.id);
};
// Handle shirt update form on PUT.
exports.shirt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.shirt_view_all_Page = async function(req, res) {
    try{
    theshirt = await shirt.find();
    res.render('shirt', { title: 'shirt Search Results', results: theshirt });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };