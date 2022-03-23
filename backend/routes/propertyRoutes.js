const express = require("express")
const { createProperty, getProperties, getPropertyById, updateProperty } = require("../controllers/propertyController.js")
const { protect, admin } = require("../middleware/authMiddleware")
const router = express.Router();

router.route("/").get(protect, admin, getProperties).post(protect, admin, createProperty);
router.route("/:id").get(getPropertyById).put(protect, admin, updateProperty);

module.exports = router;