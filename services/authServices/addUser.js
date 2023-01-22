const {User} = require('../../models')

const addUser = async (body, password, avatarURL, verificationToken) => {

    const user = await User.create({...body, password, avatarURL, verificationToken})

    return user
}

module.exports = addUser