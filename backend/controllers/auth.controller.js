const UserModel = require("../schemas/user.schema");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

const Signup = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  const user = new UserModel({
    username,
    email,
    password,
    confirm_password,
  });

  await user.save();

  return res.status(201).json({
    message: "Signup successfull",
    status: true,
    user,
  });
};

const Login = async (req, res) => {
  res.send("login route");
};

module.exports = {
  Signup,
  Login,
};
