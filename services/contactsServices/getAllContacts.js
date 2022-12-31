const {Contact} = require('../../models')

const {httpError} = require('../../helpers')

const getAllContacts = async (owner, page, limit) => {

    const skip = (page - 1) * limit

    const data = await Contact.find({owner}, '' , {skip, limit})
                            .populate('owner', 'email')
    
    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = getAllContacts