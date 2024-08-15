const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');

// Get all purchases
router.get('/', async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.json(purchases);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new purchase
router.post('/', async (req, res) => {
    const purchase = new Purchase({
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        price: req.body.price
    });

    try {
        const newPurchase = await purchase.save();
        res.status(201).json(newPurchase);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
