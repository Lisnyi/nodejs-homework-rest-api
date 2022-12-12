const { updateContact } = require('../../models/contacts')
const {httpError} = require('../../helpers')

const updateById = async (req, res, next) => {
    const { contactId } = req.params
    const { body } = req
    const data = await updateContact(contactId, body)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = updateById