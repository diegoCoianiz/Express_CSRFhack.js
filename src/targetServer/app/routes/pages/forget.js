const express = require('express')
const router = express.Router()
const path = require('path');
const forgetPath = path.join(__dirname, "../../..", "app", "public", "forgetForm.html");

//api
router.get("/", (req,res) => {
    res.sendFile(forgetPath)
})

module.exports = router