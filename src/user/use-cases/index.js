// import makeRegisterUser from "./register-user";
// import userRepo from "./../data-access";
const makeAddUser = require("./register-user");
const userRepo = require("./../data-access");
const addUserUsecase = makeAddUser({ userRepo });

module.exports = { addUserUsecase };
