const {User} = require('../../models')

const addUser = async (body, password) => {

    const user = await User.create({...body, password})

    return user
}

module.exports = addUser