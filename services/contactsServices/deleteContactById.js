const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const deleteContactById = async (id) => {

    const data = await Contact.findByIdAndRemove(id)

    if (!data) {
        throw httpError(404, 'Not found')
    }
}

module.exports = deleteContactById