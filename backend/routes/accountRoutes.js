const express = require("express")
const router = express.Router();

const { createAccount, getAccountById, getAccounts, updateAccount, getMyAccounts } = require("../controllers/accountController")
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, admin, getAccounts).post(protect, admin, createAccount);
router.route("/me").get(protect, getMyAccounts).post();
router.route("/:id").get(getAccountById).put(protect, admin, updateAccount);

module.exports = router;