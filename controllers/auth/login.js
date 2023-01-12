const {findUserByEmail, comparePasswords, createToken, updateUserToken} = require('../../services/authServices')

const login = async (req, res) => {
    const {email, password} = req.body

    const user = await findUserByEmail(email)

    await comparePasswords(password, user.password)

    const payload = {
        id: user._id,
    }

    const token = await createToken(payload)

    await updateUserToken(user._id, token)

    res.json({
        token,
        user: {
          email: user.email,
          avatarURL: user.avatarURL,
          subscription: user.subscription,
        }
      })
}

module.exports = login