const Contact = require('../../models/contact')
const {httpError} = require('../../helpers')

const updateById = async (req, res) => {
    const { contactId } = req.params
    const { body } = req
    const data = await Contact.findByIdAndUpdate(contactId, body, {new: true})

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = updateById