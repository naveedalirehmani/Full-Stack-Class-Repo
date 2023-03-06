const crypto = require("crypto");

const HashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(password, salt, 2048, 32, "sha512")
    .toString("hex");

  return hash + ":" + salt;
};

const VerifyPassword = (password, encryptedPassword) => {
  const [hash, salt] = encryptedPassword.split(":");

  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 2048, 32, "sha512")
    .toString("hex");

  return hash === hashPassword;
};

module.exports = {
  HashPassword,
  VerifyPassword,
};
