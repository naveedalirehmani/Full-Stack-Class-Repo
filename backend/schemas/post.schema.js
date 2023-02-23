const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: {
      type: String,
    },
    status: Number,
    attachment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "attachments",
    },
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

PostSchema.virtual("attachment", {
  ref: "attachments",
  localField: "attachment_id",
  foreignField: "_id",
  justOne: true,
});

PostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

PostSchema.set("toObject", { virtuals: true });
PostSchema.set("toJSON", { virtuals: true });

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
