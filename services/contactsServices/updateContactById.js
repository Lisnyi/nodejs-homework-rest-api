const {Contact} = require('../../models')

const {httpError} = require('../../helpers')

const updateContactById = async (id, owner, body) => {

    const data = await Contact.findOneAndUpdate({_id:id, owner}, body, {new:true})
                            .populate('owner', 'email')

    if (!data) {
        throw httpError(404, 'Not found')
    }

    return data
}

module.exports = updateContactById