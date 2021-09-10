const addUserController = async (req, res, addUserUseCase) => {
  const registeredUser = await addUserUseCase(req.body);
  res.json({ r: registeredUser, b: req.body });
};
module.exports = addUserController;
