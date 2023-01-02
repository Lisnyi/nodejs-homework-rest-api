const {deleteContactById} = require('../../services/contactsServices')

const deleteByIdController = async (req, res) => {
    const {contactId} = req.params
    const {_id: owner} = req.user
    
    await deleteContactById(contactId, owner)

    res.json({message: "contact deleted"})
}

module.exports = deleteByIdController