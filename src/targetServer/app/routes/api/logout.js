const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');
const users = require("../../utils/getUsers.js");
const loginMiddleware = require("../../utils/login.js")

router.get("/", loginMiddleware, (req,res) => {
    console.log(`targetServer: user ID session ${req.session.id} logged out, redirecting to login page`)
    req.session.destroy()
    return res.redirect("/");
})

module.exports = router