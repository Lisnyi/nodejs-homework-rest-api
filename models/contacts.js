const fs = require('fs/promises')
const path = require("path")
const { httpError } = require('../helpers')

const contactsPath = path.resolve('./models/contacts.json')

const updateContactsList = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf-8')
}

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(contacts) || null
  } catch (e) {
      throw httpError
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts()
    const result = contacts.find(({id}) => id === contactId)
    return result || null
  } catch (e) {
    throw httpError
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex(({id}) => id === contactId)
    if (index === -1) {
      return null
    }
    const result = contacts.splice(index, 1)
    await updateContactsList(contacts)
    return result
  } catch (e) {
    throw httpError
  }
}

const addContact = async (body) => {
  try {
    const contacts = await listContacts()
    contacts.push(body)
    await updateContactsList(contacts)
    return body || null
  } catch (e) {
    throw httpError
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex(({id}) => id === contactId)
    if (index === -1) {
      return null
    }
    contacts[index] = {id: contactId, ...body}
    await updateContactsList(contacts)
    return contacts[index]
  } catch (e) {
    throw httpError
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
