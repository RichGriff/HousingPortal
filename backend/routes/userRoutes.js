const express = require('express');

const { authUser, getUsers, registerUser, getUserById } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)  // Register User and Get all users
router.route('/login').post(authUser) // Authorize user
router.route("/:id").get(getUserById).put(); // Get and Update Single User

module.exports = router