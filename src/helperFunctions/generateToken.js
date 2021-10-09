const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1d" });
};
module.exports = generateToken;
