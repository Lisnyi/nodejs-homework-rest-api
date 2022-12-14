const express = require('express')

const router = express.Router()

const {validateBody, isValidId} = require('../../middlewares')

const contactSchema = require('../../schemas/contacts')

const {controllersWrapper} = require('../../helpers')
const contactsCtrl = require('../../controllers/contacts')

router.get('/', controllersWrapper(contactsCtrl.getAll))

router.get('/:contactId', isValidId, controllersWrapper(contactsCtrl.getById))

router.post('/', validateBody(contactSchema), controllersWrapper(contactsCtrl.add))

router.delete('/:contactId', isValidId, controllersWrapper(contactsCtrl.deleteById))

router.put('/:contactId', isValidId, validateBody(contactSchema), controllersWrapper(contactsCtrl.updateById))

module.exports = router
