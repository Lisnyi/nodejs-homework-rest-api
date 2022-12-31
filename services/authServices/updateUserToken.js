const {User} = require('../../models')

const updateUserToken = async (id, token='') => {

    await User.findByIdAndUpdate(id, {token})

    return
}

module.exports = updateUserToken