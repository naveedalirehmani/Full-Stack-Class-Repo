const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirm_password: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
