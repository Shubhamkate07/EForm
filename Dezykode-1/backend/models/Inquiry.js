// models/Inquiry.js
const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    education: { type: String, required: true },
    educationStatus: { type: String, required: true },
    listenedDate: { type: Date, required: true }, // Add this field if needed
});

module.exports = mongoose.model('Inquiry', InquirySchema);