const express = require("express");
const routes = express.Router();
const apiRoutes = require("./api");

let apiBaseURL = "/api/v1";

routes.use(apiBaseURL, apiRoutes);

module.exports = routes;
