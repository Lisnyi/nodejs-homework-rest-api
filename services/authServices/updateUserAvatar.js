const {User} = require('../../models')

const {httpError} = require('../../helpers')

const updateUserAvatar = async (id, avatarURL) => {

    const user = await User.findByIdAndUpdate(id, {avatarURL}, {new:true})

    if (!user) {
        throw httpError(404, 'Not found')
    }

    return user
}

module.exports = updateUserAvatar