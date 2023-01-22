const {User} = require('../../models')

const successUserVerify = async (id) => {

    await User.findByIdAndUpdate(id, {verify:true, verificationToken:null})

}

module.exports = successUserVerify