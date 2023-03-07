const { Router } = require("express");
const {
  Signup,
  Login,
  ListUser,
  CreateProfile,
  user,
  uploadFile,
} = require("../controllers/auth.controller");
const Authenticate = require("../helpers/authenticate");
const upload = require("../helpers/upload");

const AuthRouter = Router();

AuthRouter.get("/", ListUser);
AuthRouter.get("/user", Authenticate, user);
AuthRouter.post("/signup", Signup);
AuthRouter.post("/profile", CreateProfile);
AuthRouter.post("/login", Login);
AuthRouter.post('/users/upload', upload.single('avatar') , uploadFile);


module.exports = AuthRouter;
