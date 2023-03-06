const { Router } = require("express");
const {
  Signup,
  Login,
  ListUser,
  CreateProfile,
} = require("../controllers/auth.controller");
const Authenticate = require("../helpers/authenticate");

const AuthRouter = Router();

AuthRouter.get("/", ListUser);
AuthRouter.post("/signup", Signup);
AuthRouter.post("/profile", CreateProfile);
AuthRouter.post("/login", Login);

module.exports = AuthRouter;
