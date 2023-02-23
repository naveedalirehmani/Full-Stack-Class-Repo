const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  fullname: String,
  contact_number: String,
  address: String,
  age: String,
  gender: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  attachment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "attachments",
  },
});

ProfileSchema.virtual("attachment", {
  ref: "attachments",
  localField: "attachment_id",
  foreignField: "_id",
  justOne: true,
});

ProfileSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

ProfileSchema.set("toObject", { virtuals: true });
ProfileSchema.set("toJSON", { virtuals: true });

const ProfileModel = mongoose.model("profiles", ProfileSchema);

module.exports = ProfileModel;
