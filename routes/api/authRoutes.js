const express = require("express")
const routes = express.Router()



routes.get("/registraion",(req,res)=>{

    console.log("registration")
    res.send("registration")
})



module.exports = routes;