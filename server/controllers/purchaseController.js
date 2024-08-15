const Purchase = require('../models/purchaseModel');

// Create a new purchase
exports.createPurchase = async (req, res) => {
    try {
        const { item, quantity, userId } = req.body;
        const purchase = new Purchase({ item, quantity, userId });
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all purchases
exports.getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find().populate('userId');
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
