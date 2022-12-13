const {nanoid} = require('nanoid')

const { addContact } = require('../../models/contacts')

const add = async (req, res, next) => {
    const { body } = req
    const newContact = {id: nanoid(), ...body}
    const data = await addContact(newContact)

    res.status(201).json(data)
}

module.exports = add