const {getAllContacts} = require('../../services/contactsServices')

const getAllController = async (req, res) => {
    const {_id: owner} = req.user
    const {page=1, limit=20, favorite=null} = req.query

    const filter = {
        owner,
        favorite: favorite === null ? [true, false] : [favorite]
    }
    
    const data = await getAllContacts(filter, page, limit)

    res.json(data)
}

module.exports = getAllController