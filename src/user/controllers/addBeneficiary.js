const addBeneficiaryController = async (req, res, addBeneficiary) => {
  try {
    // await userSchema.validateAsync(req.body);
    const { email, beneficiaryEmail } = req.body;
    console.log(email, beneficiaryEmail);
    await addBeneficiary(email, beneficiaryEmail);

    return res.json({
      message: `You have added ${req.body.beneficiaryEmail} as a beneficiary !`,
    });
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
};
module.exports = addBeneficiaryController;
