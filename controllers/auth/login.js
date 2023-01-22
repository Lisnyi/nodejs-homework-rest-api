const {findUserByEmail, updateUserToken} = require('../../services/authServices')
const {httpError, createToken, comparePasswords} = require('../../helpers')

const login = async (req, res) => {
    const {email, password} = req.body

    const user = await findUserByEmail(email)

    if (!user.verify) {
      throw httpError(401, "Email not verify")
    }

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