const mongoose = require("mongoose");

const trySchema = mongoose.Schema({
    email:String,
    password:String,
    cpassword:String,
    
    name: String,
    referralCode: String,
    donations: Number

})

module.exports = mongoose.model("item",trySchema)