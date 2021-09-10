const verifyUserController = (req, res, verifyToken) => {
  const token = req.cookies.refreshtoken;
  try {
    if (!token) {
      throw new Error("Please Login or Register!");
    }
    verifyToken(req, res, token);
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
};
module.exports = verifyUserController;
