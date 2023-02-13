const mongoose = require("mongoose")

const scema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const model = new mongoose.model('userEntry', scema)


module.exports = model