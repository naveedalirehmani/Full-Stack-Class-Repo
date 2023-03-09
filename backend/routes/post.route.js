const { Router } = require("express");
const multer = require("multer");
const {
  Post,
  UpdatePost,
  UpsertPost,
  DeletePost,
  ListPosts,
  CreateAttachemt,
  CreateAttachments,
  PostsById,
} = require("../controllers/post.controller");
const Authenticate = require("../helpers/authenticate");

const PostRouter = Router();

PostRouter.get("/", ListPosts);
PostRouter.get('/:id' , PostsById)
PostRouter.post("/", Post);
PostRouter.put("/:id", Authenticate, UpdatePost);
PostRouter.put("/upsert/:id", Authenticate, UpsertPost);
PostRouter.delete("/:id", Authenticate, DeletePost);

const upload = multer({ dest: "uploads/" });

// Attachment

PostRouter.post("/attachments", upload.array("file", 10), CreateAttachments);
PostRouter.post("/attachment", upload.single("file"), CreateAttachemt);

module.exports = PostRouter;
