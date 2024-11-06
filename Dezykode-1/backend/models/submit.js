// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   address: { type: String, required: true },
//   state: { type: String, required: true },
//   city: { type: String, required: true },
//   postalCode: { type: String, required: true },
//   education: { type: String, required: true },
//   educationStatus: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    established: Date,
    firstName: String,
    lastName: String,
    email: String,
    contact: String,
    gender: String,
    address: String,
    state: { type: String, required:true }, // Ensure this is defined and required
    city: { type: String },
    postalCode: { type: String },
    education: { type: String},
    educationStatus: String,
    listenedDate: String
});

module.exports = mongoose.model('User', userSchema);