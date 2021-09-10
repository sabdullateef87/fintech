const UserRepo = require("./mongoDB/repo");
const userModel = require("../model/userModel");

const UserRepoInstance = new UserRepo(userModel);
// console.log(typeof newUserRepoInstance.addUser);
module.exports = UserRepoInstance;
