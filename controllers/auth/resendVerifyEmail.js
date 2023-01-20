const {findUserByEmail} = require('../../services/authServices')
const {sendEmail} = require('../../helpers')
const {BASE_URL} = process.env

const resendVerifyEmail = async (req, res) => {
    const {email} = req.body

    const user = await findUserByEmail(email)

    if (user.verify) {
        res.status(400).json({message: "Verification has already been passed"})
        return
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${user.verificationToken}">Click to verify email</a>`,
    }

    await sendEmail(verifyEmail)

    res.json({message: "Verification email sent"})
}

module.exports = resendVerifyEmail