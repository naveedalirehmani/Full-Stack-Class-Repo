const PostModel = require("../schemas/post.schema");

const ListPosts = async (req, res) => {
  const post = await PostModel.find({
    status: 1,
  });

  return res.status(201).json({
    post,
  });
};

const Post = async (req, res) => {
  const post = new PostModel({ ...req.body, status: 1 });
  await post.save();

  return res.status(201).json({
    post,
  });
};

const UpdatePost = async (req, res) => {
  const post = await PostModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      ...req.body,
      status: 1,
    }
  );

  if (post.acknowledged === true) {
    const updated_post = await PostModel.findOne({
      _id: req.params.id,
    });

    return res.status(201).json({
      message: "updated",
      post: updated_post,
    });
  }
};

const UpsertPost = async (req, res) => {
  const post = await PostModel.updateOne(
    { _id: req.params.id },
    { ...req.body },
    { upsert: true }
  );
  if (post.acknowledged === true) {
    const updated_post = await PostModel.findOne({
      _id: req.params.id,
    });

    return res.status(201).json({
      message: "upserted",
      post: updated_post,
    });
  }
};

const DeletePost = async (req, res) => {
  const post = await PostModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      status: 0,
    }
  );

  return res.status(301).json({
    message: "Deleted",
  });
};

module.exports = {
  Post,
  UpdatePost,
  DeletePost,
  ListPosts,
  UpsertPost,
};
