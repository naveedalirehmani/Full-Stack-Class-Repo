const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../schemas/user.schema");
const { HashPassword, VerifyPassword } = require("../helpers");
const ProfileModel = require("../schemas/profile.schema");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns

*/

const ListUser = async (req, res) => {
  console.log(req.user);

  const users = await UserModel.find().populate({
    path: "profile",
    model: "profiles",
    populate: {
      path: "attachment",
      model: "attachments",
    },
  });

  return res.status(200).json({
    message: "Users",
    users,
  });
};

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

      const payload = {
        id: user.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      return res.status(201).json({
        message: "Signup successfull",
        status: true,
        user,
        token,
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

const CreateProfile = async (req, res) => {
  const profile = new ProfileModel({
    ...req.body,
  });

  await profile.save();

  return res.status(201).send({
    profile,
  });
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

  if (user) {
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    if (VerifyPassword(password, user.password)) {
      return res.status(200).json({
        message: "Login successfull",
        user,
        token,
      });
    } else {
    }
  } else {
    return res.status(400).send({
      message: "User not found",
    });
  }
};

module.exports = {
  ListUser,
  Signup,
  Login,
  CreateProfile,
};
