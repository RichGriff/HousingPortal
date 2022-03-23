const asyncHandler = require("express-async-handler")
const Property = require("../models/propertyModel")

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  Private Admin
const getProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
});

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
const getPropertyById = asyncHandler(async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404);
      throw new Error("Property Not Found");
    }
  } catch (error) {
    res.json(error.message);
  }
});

// @desc    Create Property
// @route   POST /api/property
// @access  Private Admin
const createProperty = asyncHandler(async (req, res) => {
  try {
    const property = new Property({
      address: req.body.address,
      city: req.body.city,
      postCode: req.body.postCode,
      propertyType: req.body.propertyType
    });

    const createdProperty = await property.save();

    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @desc    Update Property
// @route   PUT /api/property
// @access  Private Admin
const updateProperty = asyncHandler(async (req, res) => {
  const { address, city, postCode, propertyType } = req.body;

  const property = await Property.findById(req.params.id);

  if (property) {
    property.address = address;
    property.city = city;
    property.postCode = postCode;
    property.propertyType = propertyType;

    const updatedProperty = await property.save();

    res.json(updatedProperty);
  } else {
    res.status(404);
    throw new Error("Property not found");
  }
});

module.exports = { getProperties, getPropertyById, createProperty, updateProperty };