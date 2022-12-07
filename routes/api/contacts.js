const express = require('express')

const router = express.Router()

const {controllersWrapper} = require('../../helpers')
const contactsCtrl = require('../../controllers/contacts')

router.get('/', controllersWrapper(contactsCtrl.getAll))

router.get('/:contactId', controllersWrapper(contactsCtrl.getById))

router.post('/', controllersWrapper(contactsCtrl.add))

router.delete('/:contactId', controllersWrapper(contactsCtrl.deleteById))

router.put('/:contactId', controllersWrapper(contactsCtrl.updateById))

module.exports = router
