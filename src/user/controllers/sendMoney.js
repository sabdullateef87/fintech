const sendMoneyController = async (req, res, sendMoney) => {
  try {
    // await userSchema.validateAsync(req.body);
    const { email, beneficiaryEmail, amount } = req.body;
    console.log(email, beneficiaryEmail, amount);
    await sendMoney(email, beneficiaryEmail, amount);

    return res.json({
      message: `Money sent successfully !`,
    });
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
};
module.exports = sendMoneyController;
