const Contact = require('../../models/contact')

const {httpError} = require('../../helpers')

const getAllContacts = async () => {
    const data = await Contact.find()
    
    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = getAllContacts