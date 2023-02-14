const UserModel = require("../schemas/user.schema");
const bcrypt = require("bcryptjs");
const { HashPassword, VerifyPassword } = require("../helpers");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns

*/

const Signup = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;

    if (password === confirm_password) {
      const user = new UserModel({
        username,
        email,
        password: HashPassword(password),
      });
      await user.save();

      return res.status(201).json({
        message: "Signup successfull",
        status: true,
        user,
      });
    } else {
      return res.status(400).send({
        message: "Password and confirm password miss match",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

const Login = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    $or: [
      {
        username: username,
      },
      { email: username },
    ],
  });

  if (VerifyPassword(password, user.password)) {
    return res.status(200).json({
      message: "Login successfull",
      user,
    });
  } else {
    return res.status(400).send({
      message: "Password incorrect",
    });
  }

  console.log(user);
};

module.exports = {
  Signup,
  Login,
};
