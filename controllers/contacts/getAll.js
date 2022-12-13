const { listContacts } = require('../../models/contacts')

const {httpError} = require('../../helpers')

const getAll = async (req, res, next) => {
    const data = await listContacts()

    if (!data) {
        throw httpError(404, 'Not found')
    }

    res.json(data)
}

module.exports = getAll