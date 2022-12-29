const express = require("express")

const authCtrl = require('../../controllers/auth')

const {controllersWrapper} = require('../../helpers')

const {validateBody} = require('../../middlewares')

const {loginSchema, registrationSchema} = require('../../schemas')

const router = express.Router()

router.post('/users/register', validateBody(registrationSchema), controllersWrapper(authCtrl.register))

router.post('/users/login', validateBody(loginSchema), controllersWrapper(authCtrl.login))

module.exports = router