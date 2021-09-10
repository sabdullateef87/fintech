class UserBuild {
  constructor() {}
  makeUser = ({
    firstname,
    lastname,
    password,
    hashedPassword,
    email,
    bankAccounts = [],
    beneficiaries = [],
  }) => {
    if (!firstname) {
      throw new Error("User must have a firstname");
    }
    if (!lastname) {
      throw new Error("User must have a lastname");
    }
    if (!email) {
      throw new Error("User must have a email address");
    }
    if (!password) {
      throw new Error("User must have a password");
    }
    return Object.freeze({
      getFirstname: () => firstname,
      getLastname: () => lastname,
      getEmail: () => email,
      getBeneficiary: () => beneficiaries,
      getBankAccount: () => bankAccounts,
      getPassword: () => password,
      getHashedPassword: () => hashedPassword,
    });
  };
}

module.exports = UserBuild;
