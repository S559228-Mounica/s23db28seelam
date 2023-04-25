const mongoose = require("mongoose")
const shirtchema = mongoose.Schema({
brand: String,
cost: {type:Number, min:5,max:1000},
color: String
})
module.exports = mongoose.model("shirt",shirtchema)