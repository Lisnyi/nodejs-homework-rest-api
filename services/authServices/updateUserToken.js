const {User} = require('../../models')

const {httpError} = require('../../helpers')

const updateUserToken = async (id, token='') => {

    const user = await User.findByIdAndUpdate(id, {token})

    if (!user) {
        throw httpError(404, 'Not found')
    }
}

module.exports = updateUserToken