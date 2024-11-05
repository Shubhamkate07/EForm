// controllers/userController.js
const User = require('../models/userModel');

exports.registerUser = async(req, res) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password,
            firstName,
            lastName,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};