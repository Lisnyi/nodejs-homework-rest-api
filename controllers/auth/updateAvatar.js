const fs = require('fs/promises')
const path = require('path')

const {updateUserAvatar} = require('../../services/authServices')
const {imageManipulation} = require('../../helpers')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const {path: tempUpload, originalname} = req.file
    const {_id} = req.user
    const fileName = `${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, fileName)
    await fs.rename(tempUpload, resultUpload)
    imageManipulation(resultUpload)
    const avatarURL = path.join('avatars', fileName)
    await updateUserAvatar(_id, avatarURL)

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar

