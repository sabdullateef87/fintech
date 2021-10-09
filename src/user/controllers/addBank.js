const addBankController = async (req, res, addBank) => {
  try {
    // await userSchema.validateAsync(req.body);
    await addBank(req.body);

    return res.json({
      message: `You have added a new bank details`,
    });
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
};
module.exports = addBankController;
