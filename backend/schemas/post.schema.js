const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: Number,
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
