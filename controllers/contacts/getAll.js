const {getAllContacts} = require('../../services/contactsServices')

const getAllController = async (req, res) => { 
    const data = await getAllContacts()

    res.json(data)
}

module.exports = getAllController