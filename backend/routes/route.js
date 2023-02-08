const { Router } = require("express");
const AuthRouter = require("./auth.route");
const PostRouter = require("./post.route");

const BaseRouter = Router();

BaseRouter.use("/auth", AuthRouter);
BaseRouter.use("/post", PostRouter);

module.exports = BaseRouter;
