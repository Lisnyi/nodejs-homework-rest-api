const { removeContact } = require('../../models/contacts')

const {httpError} = require('../../helpers')

const deleteById = async (req, res, next) => {
    const {contactId} = req.params
    const data = await removeContact(contactId)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json({message: "contact deleted"})
}

module.exports = deleteById