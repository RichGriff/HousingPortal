const express = require('express');

const { authUser, getUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post().get(protect, admin, getUsers)  // Register User and Get all users
router.route('/login').post(authUser) // Authorize user
router.route("/:id").get().put(); // Get and Update Single User

module.exports = router