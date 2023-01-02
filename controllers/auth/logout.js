const {updateUserToken} = require('../../services/authServices')

const logout = async (req, res) => {

    const {_id} = req.user

    await updateUserToken(_id)
    
    res.status(204).json()
}

module.exports = logout