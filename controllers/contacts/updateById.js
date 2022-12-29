const {updateContactById} = require('../../services/contactsServices')

const updateByIdController = async (req, res) => {
    const { contactId } = req.params
    const { body } = req
    const {_id: owner} = req.user
    
    const data = await updateContactById(contactId, owner, body)

    res.json(data)
}

module.exports = updateByIdController