const mongoose = require("mongoose")

const propertySchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String
    },
    postCode: {
      type: String,
      required: true
    },
    propertyType: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;