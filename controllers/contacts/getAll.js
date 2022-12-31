const {getAllContacts} = require('../../services/contactsServices')

const getAllController = async (req, res) => {
    const {_id: owner} = req.user
    const {page=1, limit=20} = req.query

    const data = await getAllContacts(owner, page, limit)

    res.json(data)
}

module.exports = getAllController