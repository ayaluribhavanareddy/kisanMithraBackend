// server/middleware/adminAuth.js

const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('No token provided.');
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate token.');
        }

        // Check if the user is an admin
        if (decoded.role !== 'admin') {
            return res.status(403).send('Access denied.');
        }

        req.userId = decoded.id;
        next();
    });
};

module.exports = adminAuth;
