// 'use strict'

const { Router } = require("express")

const Post  = require("../controllers/post.controller");

const PostRouter = Router();

PostRouter.post("/", Post);

module.exports = PostRouter;
