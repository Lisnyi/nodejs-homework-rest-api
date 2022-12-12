const express = require('express')

const router = express.Router()

const validateBody = require('../../middlewares/validateBody')

const contactSchema = require('../../schemas/contacts')

const {controllersWrapper} = require('../../helpers')
const contactsCtrl = require('../../controllers/contacts')

router.get('/', controllersWrapper(contactsCtrl.getAll))

router.get('/:contactId', controllersWrapper(contactsCtrl.getById))

router.post('/', validateBody(contactSchema), controllersWrapper(contactsCtrl.add))

router.delete('/:contactId', controllersWrapper(contactsCtrl.deleteById))

router.put('/:contactId', validateBody(contactSchema), controllersWrapper(contactsCtrl.updateById))

module.exports = router
