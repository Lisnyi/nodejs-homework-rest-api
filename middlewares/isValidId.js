const {isValidObjectId} = require('mongoose')

const {httpError} = require('../helpers')

const isValidId = (req, res, next) => {
    const {contactId} = req.params
    if (!isValidObjectId(contactId)) {
        return next(httpError(404, "Invalid id"))
    }
    next()
}

module.exports = isValidId