const {nanoid} = require('nanoid')

const { addContact } = require('../../models/contacts')
const contactSchema = require('../../schemas/contacts')
const {httpError} = require('../../helpers')

const add = async (req, res, next) => {
    const { body } = req
    const {error} = contactSchema.validate(body)

    if (error) {
        throw httpError(400, 'missing required name field')
    }

    const newContact = {id: nanoid(), ...body}
    const data = await addContact(newContact)

    res.status(201).json(data)
}

module.exports = add