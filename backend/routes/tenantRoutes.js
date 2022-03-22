const express = require('express')
const router = express.Router();

const { getTenants, getTenantById, updateTenant, createTenant } = require('../controllers/tenantController')

router.route("/").get(getTenants).post(createTenant);
router.route("/:id").get(getTenantById).put(updateTenant);

module.exports = router