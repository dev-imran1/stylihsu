const express = require("express")
const routes = express.Router()
const apiRoutes = require("./api")




const baseURL = "/api/v1"


routes.use(baseURL,apiRoutes)



module.exports = routes;