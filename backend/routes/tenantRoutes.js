const express = require('express')
const router = express.Router();

const { getTenants, getTenantById, updateTenant, createTenant, getUserTenant } = require('../controllers/tenantController')
const { protect, admin } = require('../middleware/authMiddleware')

router.route("/").get(protect, admin, getTenants).post(protect, admin, createTenant);
router.route("/me").get(protect, getUserTenant).post();
router.route("/:id").get(getTenantById).put(updateTenant);

module.exports = router