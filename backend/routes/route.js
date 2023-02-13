const { Router } = require("express");
const AuthRouter = require("./auth.route");
const PostRouter = require("./post.route");
const UserRouter = require("./comment.route")

const BaseRouter = Router();

BaseRouter.use("/auth", AuthRouter);
BaseRouter.use("/post", PostRouter);
BaseRouter.use("/user", UserRouter)

module.exports = BaseRouter;
