const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const getById = async (req, res) => {
    const {contactId} = req.params
    const data = await Contact.findById(contactId)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = getById