const Contact = require('../../models/contact')

const add = async (req, res) => {
    const { body } = req
    const data = await Contact.create(body)

    res.status(201).json(data)
}

module.exports = add