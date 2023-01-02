const {Contact} = require('../../models')

const {httpError} = require('../../helpers')

const deleteContactById = async (id, owner) => {

    const data = await Contact.findOneAndDelete({_id:id, owner})

    if (!data) {
        throw httpError(404, 'Not found')
    }
}

module.exports = deleteContactById