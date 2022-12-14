const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const getAll = async (req, res) => {
    const data = await Contact.find()
    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = getAll