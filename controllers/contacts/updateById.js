const {updateContactById} = require('../../services/contactsServices')

const updateByIdController = async (req, res) => {
    const { contactId } = req.params
    const { body } = req
    
    const data = await updateContactById(contactId, body)

    res.json(data)
}

module.exports = updateByIdController