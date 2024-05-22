const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Business schema
const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  openAiId: {
    type: String,
    required: true,
    unique: true,
  },
  appType: {
    type: String,
    required: true,
    enum: ["Customer Service", "Appointment Booking"],
  },
});

// Create a model from the schema
const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
