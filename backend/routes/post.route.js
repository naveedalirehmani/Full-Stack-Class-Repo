const { Router } = require("express");
const {
  Post,
  UpdatePost,
  UpsertPost,
  DeletePost,
  ListPosts,
} = require("../controllers/post.controller");
const Authenticate = require("../helpers/authenticate");

const PostRouter = Router();

PostRouter.get("/", Authenticate, ListPosts);
PostRouter.post("/", Post);
PostRouter.put("/:id", UpdatePost);
PostRouter.put("/upsert/:id", UpsertPost);
PostRouter.delete("/:id", DeletePost);

module.exports = PostRouter;
