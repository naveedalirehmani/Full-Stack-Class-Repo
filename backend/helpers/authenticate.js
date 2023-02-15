const jwt = require("jsonwebtoken");
const UserModel = require("../schemas/user.schema");

const Authenticate = async (req, res, next) => {
  try {
    const access_token = req.headers["authorization"].split(" ")[1];

    const payload = await jwt.verify(access_token, process.env.JWT_SECRET);

    if (payload) {
      const user = await UserModel.findById(payload.id);

      if (user) {
        req.user = user;
      } else {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }
      next();
    }
  } catch (error) {
    return res.status(403).json({
      error: `No authorization header found`,
    });
  }
};

module.exports = Authenticate;
