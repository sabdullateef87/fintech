const UserRepo = require("./mongoDB/repo");
const userModel = require("./mongoDB/userModel");
const ConnectDB = require("./mongoDB/connection");

const UserRepoInstance = new UserRepo(userModel, ConnectDB);
// console.log(typeof newUserRepoInstance.addUser);
module.exports = UserRepoInstance;
