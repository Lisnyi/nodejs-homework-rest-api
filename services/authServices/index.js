const addUser = require('./addUser')
const isUniqUserEmail = require('./isUniqUserEmail')
const hashPassword = require('./hashPassword')
const findUserByEmail = require('./findUserByEmail')
const comparePasswords = require('./comparePasswords')
const createToken = require('./createToken')
const updateUserToken = require('./updateUserToken')
const updateUserSubscription = require('./updateUserSubscription')

module.exports = {
    addUser,
    isUniqUserEmail,
    hashPassword,
    findUserByEmail,
    comparePasswords,
    createToken,
    updateUserToken,
    updateUserSubscription,
}