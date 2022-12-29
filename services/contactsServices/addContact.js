const {Contact} = require('../../models')

const addContact = async (body) => {

    const data = await Contact.create(body)

    return data
}

module.exports = addContact