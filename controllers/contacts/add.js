const {addContact} = require('../../services/contactsServices')

const addController = async (req, res) => {
    const { body } = req
    
    const data = await addContact(body)

    res.status(201).json(data)
}

module.exports = addController