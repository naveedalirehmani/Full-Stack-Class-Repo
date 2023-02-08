const { Router } = require("express");
const { Signup, Login } = require("../controllers/auth.controller");

const AuthRouter = Router();

AuthRouter.post("/signup", Signup);
AuthRouter.post("/login", Login);

module.exports = AuthRouter;
