// Load environment variables from .env file
require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Log environment variables and file existence
console.log('DATABASE_URL:', process.env.MONGODB_URI); // Updated to use MONGODB_URI
console.log('PORT:', process.env.PORT);

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Updated to use MONGODB_URI
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/purchases', require('./routes/purchases'));
app.use('/api/admin', require('./routes/admin'));

// Serve frontend files (optional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
