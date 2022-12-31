const {findUserByEmail, comparePasswords, createToken} = require('../../services/authServices')

const login = async (req, res) => {
    const {email, password} = req.body

    const user = await findUserByEmail(email)

    await comparePasswords(password, user.password)

    const payload = {
        id: user._id,
    }

    const token = await createToken(payload)

    res.json({
        token,
        user: {
          email: user.email,
          subscription: user.subscription,
        }
      })
}

module.exports = login