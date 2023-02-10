const CommentModel = require("../schemas/comment.schema");

const CreateComment = async (req, res) => {
  const { comment, user_id } = req.body;

  const Comment = new CommentModel({
    comment,
    user_id,
  });

  await Comment.save();

  return res.status(201).json({
    Comment,
  });
};

const ListComments = async (req, res) => {
  const Comment = await CommentModel.find();
  return res.status(200).json({
    Comment,
  });
};

module.exports = {
  CreateComment,
  ListComments,
};
