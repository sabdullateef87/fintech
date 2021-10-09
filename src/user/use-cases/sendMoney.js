function sendMoney({ UserRepoInstance }) {
  return async function makeSendMoney(email, beneficiaryEmail, amount) {
    await UserRepoInstance.sendMoney(email, beneficiaryEmail, amount);
  };
}

module.exports = sendMoney;
