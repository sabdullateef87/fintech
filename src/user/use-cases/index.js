// import makeRegisterUser from "./register-user";
// import userRepo from "./../data-access";
const makeAddUser = require("./register-user");
const UserRepoInstance = require("./../data-access");
const addUser = makeAddUser({ UserRepoInstance });

module.exports = { addUser };
