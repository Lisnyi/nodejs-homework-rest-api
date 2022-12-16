const Joi = require("joi")

const contactSchema = Joi.object({
    name: Joi.string().min(2).max(30).required().messages({"any.required": `missing required "name" field`}),
    email: Joi.string().email().required().messages({"any.required": `missing required "email" field`}),
    phone: Joi.string().min(6).required().messages({"any.required": `missing required "phone" field`}),
    favorite: Joi.boolean(),
})

module.exports = contactSchema