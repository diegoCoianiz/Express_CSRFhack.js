const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');
const { mailBoxContainer, mailBoxMessages } = require('../utils/mailBox');

router.post("/", ({body},res) => {
    mailBoxContainer(body.userEmail, body.message, body.token)
})

router.get("/", (req, res) => {
    res.send(mailBoxMessages)
})

module.exports = router