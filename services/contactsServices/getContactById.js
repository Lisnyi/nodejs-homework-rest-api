const {Contact} = require('../../models')

const {httpError} = require('../../helpers')

const getContactById = async (id, owner) => {

    const data = await Contact.findOne({_id:id, owner})
                            .populate('owner', 'email')

    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = getContactById