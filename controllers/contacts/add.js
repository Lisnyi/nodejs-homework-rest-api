const {addContact} = require('../../services/contactsServices')

const addController = async (req, res) => {
    const { body } = req
    const {_id: owner} = req.user
    
    const data = await addContact({...body, owner})

    res.status(201).json(data)
}

module.exports = addController