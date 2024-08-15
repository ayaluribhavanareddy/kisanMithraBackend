const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new admin
exports.registerAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, role: 'admin' });
        await user.save();
        res.status(201).json({ message: 'Admin registered' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login and generate token
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET_KEY);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
