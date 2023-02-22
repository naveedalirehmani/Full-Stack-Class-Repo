const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: Number,
    attachment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "attachments"
    }
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;

PostSchema.virtual('id').get(function () {
  return this._id.toHexString();
})

PostSchema.virtual('attachment', {
  ref: 'attachments',
  localField: 'id',
  foreignField: 'attachment_id',
  justOne: true
})



PostSchema.set('toObject', {virtuals: true})
PostSchema.set('toJSON', {virtuals: true})