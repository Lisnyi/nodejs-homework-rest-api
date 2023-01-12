const {isUniqUserEmail, hashPassword, addUser, createAvatar} = require('../../services/authServices')

const register = async (req, res) => {
    const {email, password} = req.body

    await isUniqUserEmail(email)

    const hashedPassword = await hashPassword(password)

    const avatarURL = createAvatar(email)

    const newUser = await addUser(req.body, hashedPassword, avatarURL)

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        }
    })
}

module.exports = register