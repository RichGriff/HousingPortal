const mongoose = require("mongoose")

const accountSchema = mongoose.Schema(
  {
    accountType: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    currentStatus: {
      type: String,
      required: true
    },
    currentBalance: {
      type: Number,
      required: true
    },
    nextBillingDate: {
      type: Date
    },
    lastBillingDate: {
      type: Date
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Property"
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tenant"
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;