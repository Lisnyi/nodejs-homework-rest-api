const jwt = require('jsonwebtoken')

const {SECRET_KEY} = process.env

const createToken = async (payload) => {

    const token = await jwt.sign(payload, SECRET_KEY, {expiresIn: '23h'})

    return token
}

module.exports = createToken