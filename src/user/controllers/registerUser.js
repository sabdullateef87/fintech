const addUserController = async (
  req,
  res,
  addUser,
  userSchema,
  bcrypt,
  generateToken
) => {
  try {
    // await userSchema.validateAsync(req.body);
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const registeredUser = await addUser({
      ...req.body,
      password: passwordHash,
    });
    const token = generateToken({ id: registeredUser._id });
    res.cookie("refreshtoken", token, {
      httpOnly: true,
      path: "/user/refresh_token",
    });
    return res.json({ message: "User Registered Successfully!!" });
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
};
module.exports = addUserController;
