const {Contact} = require('../../models')

const {httpError} = require('../../helpers')

const getAllContacts = async (owner) => {
    const data = await Contact.find({owner})
    
    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = getAllContacts