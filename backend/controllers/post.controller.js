const Sort = require("../helpers/sort");
const AttachmentModel = require("../schemas/attachment.schema");
const PostModel = require("../schemas/post.schema");

const ListPosts = async (req, res) => {
  const { page_no, page_size } = req.query;
  const { sort_column, sort_order } = Sort(req);

  const ps = parseInt(page_size) || 10;
  const pn = parseInt(page_no) || 1;

  const myCustomLabels = {
    totalDocs: "postCount",
    limit: "page_size",
    page: "page_no",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pageCount",
    pagingCounter: "slNo",
    meta: "paginator",
    docs: "postList",
  };

  // const post = await PostModel.find().populate("attachment_id");
  const post = await PostModel.paginate(
    {
      status: 1,
    },
    {
      populate: "attachment",
      offset: pn * ps - ps,
      limit: ps,
      sort: {
        [sort_column]: sort_order,
      },
      myCustomLabels,
    }
  );

  return res.status(201).json({
    post,
  });
};

const PostsById = async (req, res) => {
  try {
    const post = await PostModel.findOne({ _id: req.params.id });

    return res.status(200).json({
      post,
    });
  } catch (err) {
    console.log(err);
  }
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

const CreateAttachemt = async (req, res) => {
  const { filename, fieldname, path, mimetype, size, encoding } = req.file;

  const attachment = new AttachmentModel({
    filename,
    fieldname,
    path,
    mimetype,
    size,
    encoding,
  });
  await attachment.save();

  return res.status(201).json({
    attachment,
  });
};

const CreateAttachments = async (req, res) => {
  let attachmentArr = [];
  for (const i of req.files) {
    const { filename, fieldname, path, mimetype, size, encoding } = i;

    const attachment = new AttachmentModel({
      filename,
      fieldname,
      path,
      mimetype,
      size,
      encoding,
    });
    await attachment.save();

    attachmentArr.push(attachment);
  }
  return res.status(201).json({
    attachment: attachmentArr,
  });
};

module.exports = {
  Post,
  UpdatePost,
  DeletePost,
  ListPosts,
  UpsertPost,
  CreateAttachemt,
  CreateAttachments,
  PostsById,
};
