const express = require('express')
const router = express.Router()
const path = require('path');
const loginMiddleware = require("../../utils/login.js")
const users = require('../../utils/getUsers.js')
const { csrfToken, csrfValidation } = require('../../utils/createCsrfToken.js');

/** 
 * @To_Exploit => use
 */

// router.post("/", loginMiddleware, ({ session, body }, res) => {

/**
 * @TO_Resolve => use csrfValidation 
*/

router.post("/", loginMiddleware, csrfValidation, ({ session, body }, res) => {
    const user = users.find(user => user.id === session.userID)
    try {
        if (body.newFlag != "" && body.newFlag !== undefined && body.newFlag !== user.flag) {
            const oldFlag = user.flag;
            user.flag = body.newFlag
            console.log(`targetServer: user ID session ${session.id}: Flag changed from ${oldFlag} to ${user.flag}`)
        }
        if (body.newPassword != "" && body.newPassword != undefined && body.newPassword !== user.password) {
            const oldPassword = user.password
            user.password = body.newPassword
            console.log(`targetServer: user ID session ${session.id}: Password changed from ${oldPassword} to ${user.password}`)
        }
        res.status(200).json({ redirectUrl: '/' });
    } catch (error) {
        console.log(error)
    }
})

/** @To_Resolve_CSRF_attack => */
router.get("/csrfToken", loginMiddleware, (req, res) => {
    const token = csrfToken(req.sessionID);
    return res.send({ token })
})

module.exports = router