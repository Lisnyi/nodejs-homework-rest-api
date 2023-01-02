const {getContactById} = require('../../services/contactsServices')

const getByIdController = async (req, res) => {
    const {contactId} = req.params
    const {_id: owner} = req.user
    
    const data = await getContactById(contactId, owner)

    res.json(data)
}

module.exports = getByIdController