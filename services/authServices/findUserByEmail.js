const {User} = require('../../models')

const {httpError} = require('../../helpers')

const findUserByEmail = async (email) => {

    const user = await User.findOne({email})

    if(!user) {
        throw httpError(401, 'Email or password is wrong')
    }

    return user
}

module.exports = findUserByEmail