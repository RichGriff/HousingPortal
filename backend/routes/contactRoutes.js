const express = require('express')
const router = express.Router();

const { getContactById } = require("../controllers/contactController.js")


router.route("/").get().post();
router.route("/:id").get(getContactById).put();

module.exports = router