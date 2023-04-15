const { v4: uuid } = require('uuid');

const tokensMap = new Map()
const createMilliseconds = (seconds) => {
    return seconds * 1000
}
seconds = createMilliseconds(60)

const csrfToken = (sessionId) => {
    token = uuid()
    const userTokens = tokensMap.get(sessionId)
    userTokens.add(token)
    console.log(`targetServer: user ID session ${sessionId} add new token ${token} `)
    if (false) {
        console.log(`for the next ${seconds / 1000} seconds`)
        setTimeout(() => {
            console.log(userTokens)
            console.log(`targetServer: user ID session ${sessionId} expired after ${seconds / 1000} seconds`)
            userTokens.delete(token)
        }, seconds)
    }
    return token
}

const csrfValidation = ({ body, sessionID }, res, next) => {
    const token = body.csrf
    if (!token || !tokensMap.get(sessionID).has(token)) {
        res.status(422).send("srcf token missing or expired")
    } else {
        next()
    }
}

module.exports = {
    tokensMap,
    csrfToken,
    csrfValidation
}