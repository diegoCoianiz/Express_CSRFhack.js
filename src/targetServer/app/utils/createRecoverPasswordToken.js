const { v4: uuid } = require('uuid');

const createMilliseconds = (seconds) => {
    return seconds * 1000
}
seconds = createMilliseconds(60)

const recoverPasswordToken = (user) => {
    token = uuid()
    user["recover_password_token"] = token
    user["allow_recover_password"] = true
    console.log(`targetServer: user ID ${user.id} add new recover password token ${user.recover_password_token} `)
    if (false) {
        console.log(`for the next ${seconds / 1000} seconds`)
        setTimeout(() => {
            console.log(`targetServer: user ID ${user.id}, recover password token expired after ${seconds / 1000} seconds`)
            user["recover_password_token"] = null
            user["allow_recover_password"] = false
        }, seconds)
    }
    return token
}

module.exports = recoverPasswordToken