class UserRepo {
  constructor(UserModel, ConnectDB) {
    this.UserModel = UserModel;
    this.ConnectDB = ConnectDB;
  }
  addUser = async (userInfo) => {
    await this.ConnectDB();
    const { firstname, lastname, email, password } = userInfo;
    const isExist = await this.UserModel.findOne({ email });
    if (isExist) {
      throw new Error("User already exist in the database!");
    }
    const newUser = new this.UserModel({
      firstname,
      lastname,
      email,
      password,
    });
    await newUser.save();
    console.log(newUser);
    return newUser;
  };
}
module.exports = UserRepo;
