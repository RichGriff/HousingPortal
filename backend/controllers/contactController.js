const asyncHandler = require('express-async-handler')
const contactsData = require('../data/contacts.json')

// TODO: Get Single Contact - Associated with the current user
// TODO: Update Contact - Associated with the current user

const getContactById = asyncHandler(async (req, res) => {
    const id = req.params.id

    const contact = contactsData.filter(c => c.id == id)

    if (contact.length > 0) {
        return res.status(200).json(contact)
    } else {
        return res.status(404).json({ message: 'No Contact Found'})
    }    
})

module.exports = {
    getContactById
}