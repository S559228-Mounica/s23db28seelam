const mongoose = require("mongoose")
const shirtchema = mongoose.Schema({
brand: String,
cost: Number,
color: String
})
module.exports = mongoose.model("shirt",shirtchema)