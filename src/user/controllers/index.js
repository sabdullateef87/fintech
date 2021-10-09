const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const generateToken = require("../../helperFunctions/generateToken");
const verifyToken = require("../../helperFunctions/verifyToken");
const userSchema = require("../validator/validate");
const { addUser, addBeneficiary, addBank, sendMoney } = require("../use-cases");
const addUserController = require("./registerUser");
const verifyUserController = require("./verifyUser");
const addBeneficiaryController = require("./addBeneficiary");
const addBankController = require("./addBank");
const sendMoneyController = require("./sendMoney");

router.get("/", (req, res) => res.send("hello"));

router.post("/user", (req, res) =>
  addUserController(req, res, addUser, userSchema, bcrypt, generateToken)
);
router.get("/user/bank", (req, res) => addBankController(req, res, addBank));
router.post("/user/beneficiary", (req, res) =>
  addBeneficiaryController(req, res, addBeneficiary)
);
router.post("/user/send_money", (req, res) =>
  sendMoneyController(req, res, sendMoney)
);

router.get("/user/refresh_token", (req, res) =>
  verifyUserController(req, res, verifyToken)
);
module.exports = router;
