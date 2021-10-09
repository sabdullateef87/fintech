const mongoose = require("mongoose");
const UserModel = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    beneficiaries: [],
    bankAccounts: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserModel);
