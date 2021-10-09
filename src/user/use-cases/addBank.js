function addBank({ UserRepoInstance }) {
  return async function makeAddBank(bankDetails) {
    await UserRepoInstance.addBank(bankDetails);
  };
}

module.exports = addBank;
