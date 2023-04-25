const mongoose = require("mongoose")
const shirtchema = mongoose.Schema({
brand: {type:String, minlength:2,maxlength:20},
cost: {type:Number, min:5,max:1000},
color: {type:String, minlength:3,maxlength:20}
})
module.exports = mongoose.model("shirt",shirtchema)