const { Router } = require("express");
const AuthRouter = require("./auth.route");
const PostRouter = require("./post.route");
const CommentRouter = require("./comment.route");

const BaseRouter = Router();

BaseRouter.use("/auth", AuthRouter);
BaseRouter.use("/post", PostRouter);
BaseRouter.use("/comment", CommentRouter);

module.exports = BaseRouter;
