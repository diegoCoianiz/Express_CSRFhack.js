const express = require('express')
const router = express.Router()
const users = require("../../utils/getUsers.js");
const { tokensMap } = require('../../utils/createCsrfToken.js');

router.post("/", ({ body, session, sessionID }, res) => {
    try {
        if (!body.userName || !body.password) return res.status(400).json({ error: "fill all the fields" })
        const user = users.find(user => user.userName === body.userName)
        if (!user || user.password !== body.password) return res.status(400).json({ error: "invalid credentials" });
        session.userID = user.id;

        /** @resolve_CSRF_attack => */
        tokensMap.set(sessionID, new Set())
        console.log(`targetServer: user ID session ${session.id} logged, redirecting to home page`)
        res.status(200).json({ redirectUrl: '/home', id: user.id});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router