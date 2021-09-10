const userRepo = require("./mongoDB/repo");
const userModel = require("../model/userModel");

const newUserRepoInstance = new userRepo(userModel);
// console.log(typeof newUserRepoInstance.addUser);
module.exports = newUserRepoInstance;
