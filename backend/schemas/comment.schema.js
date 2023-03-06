const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  comment: String,
  user_id: Number,
});

const CommentModel = mongoose.model("comments", CommentSchema);
module.exports = CommentModel;
