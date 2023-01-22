const {findUserByVerificationToken, successUserVerify} = require('../../services/authServices')

const verify = async (req, res) => {
    const {verificationToken} = req.params

    const user = await findUserByVerificationToken(verificationToken)

    await successUserVerify(user._id)

    res.json({message: 'Verification successful'})
}

module.exports = verify