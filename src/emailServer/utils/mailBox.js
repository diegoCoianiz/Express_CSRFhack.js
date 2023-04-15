const mailBoxMessages = [];

const mailBoxContainer = (userEmail, message, token) => {
    const boxId = mailBoxMessages.length + 1
    const render = `
    <div class="form" id="message-form-${boxId}">
        <div class="input input-name">
            ${userEmail}
        </div>
        <div class="input">
            from: TheWebSite
        </div>
        <div class="input">
            issue: Request for new password
        </div>
        <div class="input input-message">
            message: ${message}
            <h3>${token}</h3>
        </div>
    </div>
    `
    return mailBoxMessages.unshift(render)
}

module.exports = { mailBoxContainer, mailBoxMessages};