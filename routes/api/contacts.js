const express = require('express')

const router = express.Router()

const {validateBody, isValidId, authenticate} = require('../../middlewares')

const {contactSchema, favoriteSchema} = require('../../schemas')

const {controllersWrapper} = require('../../helpers')

const contactsCtrl = require('../../controllers/contacts')

router.get('/', authenticate, controllersWrapper(contactsCtrl.getAllController))

router.get('/:contactId', authenticate, isValidId, controllersWrapper(contactsCtrl.getByIdController))

router.post('/', authenticate, validateBody(contactSchema), controllersWrapper(contactsCtrl.addController))

router.delete('/:contactId', authenticate, isValidId, controllersWrapper(contactsCtrl.deleteByIdController))

router.put('/:contactId', authenticate, isValidId, validateBody(contactSchema), controllersWrapper(contactsCtrl.updateByIdController))

router.patch('/:contactId/favorite', authenticate, isValidId, validateBody(favoriteSchema), controllersWrapper(contactsCtrl.updateFavoriteController))

module.exports = router
