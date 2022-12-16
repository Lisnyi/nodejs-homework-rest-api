const {updateStatusContact} = require('../../services/contactsServices')

const updateFavoriteController = async (req, res) => {
    const { contactId } = req.params
    const { body } = req

    const data = await updateStatusContact(contactId, body)

    res.json(data)
}

module.exports = updateFavoriteController