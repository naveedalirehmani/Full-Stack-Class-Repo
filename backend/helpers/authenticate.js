const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  try {
    const access_token = req.headers["authorization"].split(" ")[1];

    const payload = await jwt.verify(access_token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = Authenticate;
