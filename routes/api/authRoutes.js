const express = require("express");
const registrationController = require("../../contorllers/registrationControllers");
const loginController = require("../../contorllers/loginController");
const routes = express.Router();

routes.get("/registration", registrationController);


routes.get("/login", loginController);

module.exports = routes;
