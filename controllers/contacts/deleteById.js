const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const deleteById = async (req, res) => {
    const {contactId} = req.params
    const data = await Contact.findByIdAndRemove(contactId)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json({message: "contact deleted"})
}

module.exports = deleteById