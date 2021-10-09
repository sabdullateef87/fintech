const jwt = require("jsonwebtoken");
const generateToken = require("./generateToken");
const verifyToken = (req, res, rf_token) => {
  jwt.verify(rf_token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(user);
    if (err) throw new Error("Please register or login !");
    const accesstoken = generateToken({ id: user.id });
    res.json({ accesstoken });
  });
};
module.exports = verifyToken;
