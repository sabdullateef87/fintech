const UserRepoInstance = require("./../data-access");
// import makeRegisterUser from "./register-user";
// import userRepo from "./../data-access";
const addUser = require("./registerUser")({ UserRepoInstance });
const addBeneficiary = require("./addBeneficiary")({ UserRepoInstance });
const addBank = require("./addBank")({ UserRepoInstance });
const sendMoney = require("./sendMoney")({ UserRepoInstance });

module.exports = { addUser, addBeneficiary, addBank, sendMoney };
