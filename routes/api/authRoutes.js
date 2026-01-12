const express = require("express");
const routes = express.Router();

routes.get("/registration", (req, res) => {
  console.log("registration");
  res.send("registration");
});
routes.get("/Product", (req, res) => {
  console.log("Product");
  res.send("Product");
});

module.exports = routes;
