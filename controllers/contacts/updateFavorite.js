const {updateStatusContact} = require('../../services/contactsServices')

const updateFavoriteController = async (req, res) => {
    const { contactId } = req.params
    const { body } = req
    const {_id: owner} = req.user

    const data = await updateStatusContact(contactId, owner, body)

    res.json(data)
}

module.exports = updateFavoriteController