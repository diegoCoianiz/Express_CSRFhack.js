const express = require('express')
const router = express.Router()
const path = require('path');
const homePath = path.join(__dirname, "../../..", "app", "public", "home.html");
const loginMiddleware = require("../../utils/login.js")

//api
router.get("/", loginMiddleware, (req,res) => {
    res.sendFile(homePath)
})

module.exports = router