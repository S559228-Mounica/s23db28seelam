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
/*exports.shirt_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt detail: ' + req.params.id);
};*/
// for a specific shirt.
exports.shirt_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await shirt.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
/*exports.shirt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt delete DELETE ' + req.params.id);
};*/
// Handle shirt delete on DELETE.
exports.shirt_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await shirt.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   
// Handle shirt update form on PUT.
/*exports.shirt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: shirt update PUT' + req.params.id);
};
*/
// Handle shirt update form on PUT.
exports.shirt_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await shirt.findById( req.params.id)
 // Do updates of properties
 if(req.body.brand) 
 toUpdate.brand = req.body.brand;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 if(req.body.color) toUpdate.color = req.body.color;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
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

// Handle a show one view with id specified by query
exports.shirt_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await shirt.findById( req.query.id)
    res.render('shirtdetail', 
   { title: 'shirt Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a shirt.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shirt_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('shirtcreate', { title: 'shirt Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a shirt.
// query provides the id
exports.shirt_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await shirt.findById(req.query.id)
    res.render('shirtupdate', { title: 'shirt Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };