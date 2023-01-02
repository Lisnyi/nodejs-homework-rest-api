const {updateUserSubscription} = require('../../services/authServices')

const updateSubscription = async (req, res) => {
    const {subscription} = req.body
    const {_id} = req.user

    const user = await updateUserSubscription(_id, subscription)

    res.json(user)
}

module.exports = updateSubscription