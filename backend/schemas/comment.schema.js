const mongoose = require("mongoose")

const UserData = mongoose.Schema({
    userid : Number,
    username : String,
    comment : String

})

const userModel = new mongoose.model("UserCollection" , UserData)



module.exports = userModel