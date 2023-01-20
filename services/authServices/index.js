const addUser = require('./addUser')
const isUniqUserEmail = require('./isUniqUserEmail')
const findUserByEmail = require('./findUserByEmail')
const updateUserToken = require('./updateUserToken')
const updateUserSubscription = require('./updateUserSubscription')
const updateUserAvatar = require('./updateUserAvatar')
const findUserByVerificationToken = require('./findUserByVerificationToken')
const successUserVerify = require('./successUserVerify')

module.exports = {
    addUser,
    isUniqUserEmail,
    findUserByEmail,
    updateUserToken,
    updateUserSubscription,
    updateUserAvatar,
    findUserByVerificationToken,
    successUserVerify,
}