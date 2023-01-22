const {User} = require('../../models')

const {httpError} = require('../../helpers')

const findUserByVerificationToken = async (verificationToken) => {

    const user = await User.findOne({verificationToken})

    if(!user) {
        throw httpError(404, 'User not found')
    }

    return user
}

module.exports = findUserByVerificationToken