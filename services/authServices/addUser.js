const {User} = require('../../models')

const addUser = async (body, password, avatarURL) => {

    const user = await User.create({...body, password, avatarURL})

    return user
}

module.exports = addUser