// // server.js (add this line before app.listen)

// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://ashankaidevify:idevify%40gmail.com@cluster0.ijmsuse.mongodb.net/", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.error("MongoDB connection error:", err));

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(bodyParser.json()); // Parse JSON bodies

// // Sample in-memory storage (replace with a database in production)
// const inquiries = [];

// // Inquiry endpoint
// app.post('/inquire', (req, res) => {
//     const { address, state, city, pincode, education, educationStatus, listenedDate } = req.body;

//     // Basic validation
//     if (!address || !state || !city || !pincode || !education || !educationStatus || listenedDate) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Store inquiry (in-memory for demo purposes)
//     const newInquiry = { address, state, city, pincode, education, educationStatus, listenedDate };
//     inquiries.push(newInquiry);

//     // Respond with success message
//     return res.status(201).json({ message: 'Inquiry submitted successfully', inquiry: newInquiry });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
// // const Inquiry = require('./models/Inquiry'); // Import the Inquiry model

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://ashankaidevify:idevify%40gmail.com@cluster0.ijmsuse.mongodb.net/", { // Use environment variable for the URI
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.error("MongoDB connection error:", err));

// // Inquiry endpoint
// // Inquiry endpoint
// app.post('/inquire', async(req, res) => {
//     const { address, state, city, pincode, education, educationStatus, listenedDate } = req.body;

//     // Basic validation
//     if (!address || !state || !city || !pincode || !education || !educationStatus || !listenedDate) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Store inquiry (in-memory for demo purposes)
//     const newInquiry = { address, state, city, pincode, education, educationStatus, listenedDate };

//     // Respond with success message
//     return res.status(201).json({ message: 'Inquiry submitted successfully', inquiry: newInquiry });
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js// server.js
// 



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require("./models/submit"); // Ensure the correct path to the User model
const app = express();
const PORT = 5000; // Port for the backend server

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect("mongodb+srv://ashankaidevify:idevify%40gmail.com@cluster0.ijmsuse.mongodb.net/DK")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// API endpoint to submit data
app.post('/api/submit', async(req, res) => {
    try {
        // Define a new user object
        const userData = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            established: req.body.established,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            gender: req.body.gender,
            address: req.body.address,
            State: req.body.state,
            city: req.body.city,
            postalCode: req.body.postalCode,
            Education: req.body.Education,
            educationStatus: req.body.educationStatus,
            listenedDate: req.body.listenedDate
        };
        console.log("Request Body:", req.body);
        // Save the user data to the database
        await User.insertMany([userData]);

        // Send a success response
        res.status(201).json({ message: 'User data saved successfully!' });
    } catch (error) {
        // Handle errors during saving
        console.error("Error saving user data:", error);
        res.status(500).json({ message: 'Failed to save user data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});