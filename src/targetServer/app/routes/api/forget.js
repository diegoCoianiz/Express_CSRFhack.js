const express = require('express')
const router = express.Router()
const users = require("../../utils/getUsers.js");
const recoverPasswordToken = require("../../utils/createRecoverPasswordToken.js")

router.post("/", ({ body }, res) => {
    try {
        if (!body.userName) return res.status(400).send({ error: "fill all the fields" })
        try {
            const user = users.find(user => user.userName === body.userName)
            recoverPasswordToken(user)
            console.log(`targetServer: user ${user.userName} find, sending request to email ${user.flag}`)
            res.status(200).json({ _check: true, user: user });
        } catch (error) {
            res.status(400).json({ _check_: false, error: "user not found" });

        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router