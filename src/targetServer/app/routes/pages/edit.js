const express = require('express')
const router = express.Router()
const path = require('path');
const loginMiddleware = require("../../utils/login.js")

const editPath = path.join(__dirname, "../../..", "app", "public", "editForm.html");
router.get("/", loginMiddleware, (req, res) => {
    console.log(`targetServer: user ID session ${req.session.id} select edit data, redirecting to edit page`)
    res.sendFile(editPath);
});

module.exports = router