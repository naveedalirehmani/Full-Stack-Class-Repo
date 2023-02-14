const { Router } = require("express");
const { Signup, Login, ListUser } = require("../controllers/auth.controller");
const Authenticate = require("../helpers/authenticate");

const AuthRouter = Router();

AuthRouter.get("/", Authenticate, ListUser);
AuthRouter.post("/signup", Signup);
AuthRouter.post("/login", Login);

module.exports = AuthRouter;
