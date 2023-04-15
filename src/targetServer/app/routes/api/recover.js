const express = require('express')
const router = express.Router()
const users = require("../../utils/getUsers.js");

router.post("/", ({ body }, res) => {
    console.log("inicia el recover")
    try {
        if (!body.token || !body.newPassword) return res.status(400).send({ error: "fill all the fields" })
        try {
            const user = users.find(user => user.recover_password_token === body.token)
            if(user && user.allow_recover_password) {
                user.recover_password_token = null
                user.allow_recover_password = false
                user.password = body.newPassword
                console.log(`targetServer: user token ${true}, creating new password ${user.password}`)
            }
            res.status(200)
            .json({ _check: true});
        } catch (error) {
            res.status(400).json({ _check_: false, error: "user not found" });

        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router