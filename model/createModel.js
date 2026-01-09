const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const createModel = new mongoose.Schema(
  {
    name:String,
    email:String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Abc", createModel);
