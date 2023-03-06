const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

UserSchema.virtual("profile", {
  ref: "profiles",
  localField: "_id",
  foreignField: "userId",
  justOne: true,
});

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
