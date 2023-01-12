const express = require("express")

const authCtrl = require('../../controllers/auth')

const {controllersWrapper} = require('../../helpers')

const {validateBody, authenticate, upload} = require('../../middlewares')

const {loginSchema, registrationSchema, subscriptionSchema} = require('../../schemas')

const router = express.Router()

router.post('/users/register', validateBody(registrationSchema), controllersWrapper(authCtrl.register))

router.post('/users/login', validateBody(loginSchema), controllersWrapper(authCtrl.login))

router.get('/users/current', authenticate, controllersWrapper(authCtrl.getCurrent))

router.post('/users/logout', authenticate, controllersWrapper(authCtrl.logout))

router.patch('/users/subscription', authenticate, validateBody(subscriptionSchema), controllersWrapper(authCtrl.updateSubscription))

router.patch('/users/avatars', authenticate, upload.single('avatar'), controllersWrapper(authCtrl.updateAvatar))

module.exports = router