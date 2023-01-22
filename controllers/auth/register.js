const {nanoid} = require('nanoid')
const {isUniqUserEmail, addUser} = require('../../services/authServices')
const {sendEmail, hashPassword, createAvatar} = require('../../helpers')
const {BASE_URL} = process.env

const register = async (req, res) => {
    const {email, password} = req.body

    await isUniqUserEmail(email)

    const hashedPassword = await hashPassword(password)

    const avatarURL = createAvatar(email)

    const verificationToken = nanoid()

    const newUser = await addUser(req.body, hashedPassword, avatarURL, verificationToken)

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Click to verify email</a>`,
    }

    await sendEmail(verifyEmail)

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        }
    })
}

module.exports = register