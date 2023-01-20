const bcrypt = require('bcrypt')

const {httpError} = require('./httpError')

const comparePasswords = async (loginPassword, userPassword) => {

    const passwordCompare = await bcrypt.compare(loginPassword, userPassword)

    if(!passwordCompare) {
        throw httpError(401, 'Email or password is wrong')
    }
}

module.exports = comparePasswords