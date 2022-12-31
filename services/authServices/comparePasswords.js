const bcrypt = require('bcrypt')

const {httpError} = require('../../helpers')

const comparePasswords = async (loginPassword, userPassword) => {

    const passwordCompare = await bcrypt.compare(loginPassword, userPassword)

    if(!passwordCompare) {
        throw httpError(401, 'Email or password is wrong')
    }

    return
}

module.exports = comparePasswords