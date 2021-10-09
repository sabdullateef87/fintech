class UserRepo {
  constructor(UserModel, ConnectDB) {
    this.UserModel = UserModel;
    this.ConnectDB = ConnectDB;
  }
  async addUser(userInfo) {
    await this.ConnectDB();
    const { firstname, lastname, email, password } = userInfo;
    const isExist = await this.UserModel.findOne({ email });
    if (isExist) {
      throw new Error("User already exist!");
    }
    const newUser = new this.UserModel({
      firstname,
      lastname,
      email,
      password,
    });
    await newUser.save();
    return newUser;
  }
  async findOne(email) {
    await this.ConnectDB();
    if (!email) {
      throw new Error("Please enter your email");
    }
    const user = this.UserModel.findOne({ email });
    return user;
  }
  async addBeneficiary(email, beneficiaryEmail) {
    await this.ConnectDB();
    if (!beneficiaryEmail) {
      throw new Error("Please fill in the beneficiary you want to add!");
    }
    const hasAccount = await this.UserModel.findOne({
      email: beneficiaryEmail,
    });
    if (!hasAccount) {
      throw new Error("Beneficiary does not have an account!");
    }
    const check = await this.UserModel.findOne({
      email,
    });
    if (check.beneficiaries.includes(beneficiaryEmail)) {
      throw new Error("This beneficiary already exist!");
    }
    await this.UserModel.updateOne(
      { email: email },
      { $push: { beneficiaries: [beneficiaryEmail] } }
    );
  }
  async addBank(bankDetails) {
    console.log(bankDetails.email);
  }
  async sendMoney(email, beneficiaryEmail, amount) {
    await this.ConnectDB();
    const hasAccount = await this.UserModel.findOne({
      email: beneficiaryEmail,
    });
    if (!hasAccount) {
      throw new Error("Beneficiary does not have an account!");
    }
    const check = await this.UserModel.findOne({
      email,
    });
    if (!check.beneficiaries.includes(beneficiaryEmail)) {
      throw new Error(`You do not have ${beneficiaryEmail} as a beneficiary !`);
    }
    const sender = await this.UserModel.findOne({ email });
    const recepient = await this.UserModel.findOne({ beneficiaryEmail });

    if (sender.balance === 0 || sender.balance - amount < 0) {
      throw new Error("Insufficient balance to complete this transaction !");
    }
    await this.UserModel.findOneAndUpdate(
      { email },
      { balance: sender.balance - amount }
    );
    await this.UserModel.findOneAndUpdate(
      { beneficiaryEmail },
      { balance: recepient.balance + amount }
    );
  }
}
module.exports = UserRepo;
