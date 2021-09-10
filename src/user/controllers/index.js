const express = require("express");
const router = express.Router();
const { addUserUsecase } = require("../use-cases");
const addUserController = require("./register-user");

router.post("/user", (req, res) => addUserController(req, res, addUserUsecase));
module.exports = router;
