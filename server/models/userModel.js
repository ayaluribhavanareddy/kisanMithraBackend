const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
