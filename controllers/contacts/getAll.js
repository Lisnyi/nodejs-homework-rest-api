const {getAllContacts} = require('../../services/contactsServices')

const getAllController = async (req, res) => {
    const {_id: owner} = req.user

    const data = await getAllContacts(owner)

    res.json(data)
}

module.exports = getAllController