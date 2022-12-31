const express = require("express")

const authCtrl = require('../../controllers/auth')

const {controllersWrapper} = require('../../helpers')

const {validateBody, authenticate} = require('../../middlewares')

const {loginSchema, registrationSchema} = require('../../schemas')

const router = express.Router()

router.post('/users/register', validateBody(registrationSchema), controllersWrapper(authCtrl.register))

router.post('/users/login', validateBody(loginSchema), controllersWrapper(authCtrl.login))

router.get('/users/current', authenticate, controllersWrapper(authCtrl.getCurrent))

router.post('/users/logout', authenticate, controllersWrapper(authCtrl.logout))

module.exports = router