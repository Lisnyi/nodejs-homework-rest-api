const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const getContactById = async (id) => {

    const data = await Contact.findById(id)

    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = getContactById