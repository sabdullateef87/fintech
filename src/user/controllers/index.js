const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const userSchema = require("../validator/validate");
const { addUser } = require("../use-cases");
const addUserController = require("./register-user");
const verifyUserController = require("./verify-user");

router.post("/user", (req, res) =>
  addUserController(req, res, addUser, userSchema, bcrypt, generateToken)
);
router.get("/user/refresh_token", (req, res) =>
  verifyUserController(req, res, verifyToken)
);
module.exports = router;
