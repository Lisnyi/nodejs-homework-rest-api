const { getContactById } = require('../../models/contacts')

const {httpError} = require('../../helpers')

const getById = async (req, res, next) => {
    const {contactId} = req.params
    const data = await getContactById(contactId)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = getById