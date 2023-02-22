const mongoose = require("mongoose");

const AttachmentSchema = new mongoose.Schema({
    filename: String,
    fieldname: String,
    path: String, 
    mimetype: String,
    size: String,
    encoding:String
});

const AttachmentModel = mongoose.model("attachments", AttachmentSchema);

module.exports = AttachmentModel;

AttachmentSchema.virtual('id').get(function () {
    return this._id.toHexString();
})


AttachmentSchema.set('toObject', {virtuals: true})
AttachmentSchema.set('toJSON', {virtuals: true})