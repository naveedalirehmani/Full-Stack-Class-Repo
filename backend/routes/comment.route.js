const { Router } = require("express");
const {
  CreateComment,
  ListComments,
} = require("../controllers/comment.controller");

const CommentRouter = Router();

CommentRouter.get("/", ListComments);
CommentRouter.post("/", CreateComment);

module.exports = CommentRouter;
