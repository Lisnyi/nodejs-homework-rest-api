const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const updateContactById = async (id, body) => {

    const data = await Contact.findByIdAndUpdate(id, body, {new: true})

    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = updateContactById