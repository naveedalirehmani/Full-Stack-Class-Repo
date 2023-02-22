const { Router } = require("express");
const multer = require('multer');
const {
  Post,
  UpdatePost,
  UpsertPost,
  DeletePost,
  ListPosts,
  CreateAttachemt
} = require("../controllers/post.controller");
const Authenticate = require("../helpers/authenticate");

const PostRouter = Router();

PostRouter.get("/", ListPosts);
PostRouter.post("/", Post);
PostRouter.put("/:id", UpdatePost);
PostRouter.put("/upsert/:id", UpsertPost);
PostRouter.delete("/:id", DeletePost);

const upload = multer({ dest: 'uploads/' })

// Attachment
PostRouter.post("/attachment", upload.single('file'), CreateAttachemt);



module.exports = PostRouter;
