function addBeneficiary({ UserRepoInstance }) {
  return async function makeAddBeneficiary(email, beneficiaryEmail) {
    await UserRepoInstance.addBeneficiary(email, beneficiaryEmail);
  };
}

module.exports = addBeneficiary;
