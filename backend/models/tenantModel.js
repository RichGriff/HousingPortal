const mongoose = require("mongoose")

const tenantSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String
    },
    DOB: {
      type: Date,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    }, 
    userId: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;