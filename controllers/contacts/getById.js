const {getContactById} = require('../../services/contactsServices')

const getByIdController = async (req, res) => {
    const {contactId} = req.params
    
    const data = await getContactById(contactId)

    res.json(data)
}

module.exports = getByIdController