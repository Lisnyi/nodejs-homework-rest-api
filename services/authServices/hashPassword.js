const bcrypt = require('bcrypt')

const hashPassword = async (password) => {

    const hashPassword = await bcrypt.hash(password, 10)

    return hashPassword
}

module.exports = hashPassword