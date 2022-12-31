const {isUniqUserEmail, hashPassword, addUser} = require('../../services/authServices')

const register = async (req, res) => {
    const {email, password} = req.body

    await isUniqUserEmail(email)

    const hashedPassword = await hashPassword(password)

    const newUser = await addUser(req.body, hashedPassword)

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        }
    })
}

module.exports = register