const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const PostModel = mongoose.model(PostSchema);

module.exports = PostModel;
