const {User} = require('../../models')

const {httpError} = require('../../helpers')

const updateUserSubscription = async (id, subscription) => {

    const user = await User.findByIdAndUpdate(id, {subscription}, {new:true})

    if (!user) {
        throw httpError(404, 'Not found')
    }

    return user
}

module.exports = updateUserSubscription