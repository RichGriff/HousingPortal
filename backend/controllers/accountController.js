const asyncHandler = require("express-async-handler");
const { findById } = require("../models/accountModel");
const Account = require("../models/accountModel");
const Property = require("../models/propertyModel");
const Tenant = require("../models/tenantModel");

// @desc    Fetch all accounts
// @route   GET /api/accounts
// @access  Private Admin
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({}).populate('tenant').populate('property');
  res.json(accounts);
});

// @desc    Get single account
// @route   GET /api/accounts/:id
// @access  Public
const getAccountById = asyncHandler(async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account) {
      res.json(account);
    } else {
      res.status(404);
      throw new Error("Account not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc    Create an account
// @route   POST /api/accounts
// @access  Private Admin
const createAccount = asyncHandler(async (req, res) => {
  try {
    const account = new Account({
      accountType: req.body.accountType,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      currentStatus: req.body.currentStatus,
      currentBalance: req.body.currentBalance,
      nextBillingDate: req.body.nextBillingDate,
      lastBillingDate: req.body.lastBillingDate,
      property: req.body.property,
      tenant: req.body.tenant
    });

    const createdAccount = await account.save();

    res.status(201).json(createdAccount);
  } catch (error) {
    console.log(error);
  }
});

// @desc    Update Account
// @route   PUT /api/accounts
// @access  Private Admin
const updateAccount = asyncHandler(async (req, res) => {
  const { accountType, startDate, endDate, currentStatus, currentBalance, nextBillingDate, lastBillingDate, property, tenant } = req.body;

  const account = await Account.findById(req.params.id);

  if (account) {
    account.accountType = accountType;
    account.startDate = startDate;
    account.endDate = endDate;
    account.currentStatus = currentStatus;
    account.currentBalance = currentBalance;
    account.nextBillingDate = nextBillingDate;
    account.lastBillingDate = lastBillingDate;
    account.property = property;
    account.tenant = tenant;

    const updatedAccount = await account.save();

    res.json(updatedAccount);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

// @desc    Fetch user account
// @route   GET /api/accounts/me
// @access  Publ Admin
const getMyAccounts = asyncHandler(async (req, res) => {
  const tenant = await Tenant.findOne({ userId: req.user._id })
  const accounts = await Account.find({ tenant: tenant._id }).populate('tenant').populate('property');

  if (accounts.length == 0) {
    return res.json({ message: `No Accounts Found` })
  }

  res.json(accounts);
});

module.exports = { 
  getAccounts, 
  getAccountById, 
  createAccount, 
  updateAccount,
  getMyAccounts
};