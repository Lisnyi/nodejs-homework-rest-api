const gravatar = require('gravatar')

const createAvatar = (email) => {
    const avatarURL = gravatar.url(email)

    return avatarURL
}

module.exports = createAvatar