const {User} = require('../../models')

const {httpError} = require('../../helpers')

const isUnicUserEmail = async (email) => {

    const user = await User.findOne({email})

    if(user) {
        throw httpError(409, 'Email in use')
    }
}

module.exports = isUnicUserEmail