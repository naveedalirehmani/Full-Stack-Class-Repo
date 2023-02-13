const mongoose = require("mongoose")

const UserData = mongoose.Schema({
    userid: Number,
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    comment: String

})

const userModel = new mongoose.model("UserCollection", UserData)



module.exports = userModel