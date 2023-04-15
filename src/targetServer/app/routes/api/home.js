const express = require('express')
const router = express.Router()
const users = require("../../utils/getUsers.js");
const loginMiddleware = require("../../utils/login.js")

router.post("/", loginMiddleware, ({ body }, res) => {
    const user = users.find(user => user.id === parseInt(body.id))
    res.status(200).json(user);
})

module.exports = router