const express = require('express')

const router = express.Router()

const {validateBody, isValidId} = require('../../middlewares')

const {contactSchema, favoriteSchema} = require('../../schemas')

const {controllersWrapper} = require('../../helpers')
const contactsCtrl = require('../../controllers/contacts')

router.get('/', controllersWrapper(contactsCtrl.getAllController))

router.get('/:contactId', isValidId, controllersWrapper(contactsCtrl.getByIdController))

router.post('/', validateBody(contactSchema), controllersWrapper(contactsCtrl.addController))

router.delete('/:contactId', isValidId, controllersWrapper(contactsCtrl.deleteByIdController))

router.put('/:contactId', isValidId, validateBody(contactSchema), controllersWrapper(contactsCtrl.updateByIdController))

router.patch('/:contactId/favorite', isValidId, validateBody(favoriteSchema), controllersWrapper(contactsCtrl.updateFavoriteController))

module.exports = router
