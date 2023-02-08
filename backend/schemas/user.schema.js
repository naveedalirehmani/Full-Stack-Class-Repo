const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirm_password: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
