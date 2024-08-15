const mongoose = require('mongoose');

// Define the purchase schema
const PurchaseSchema = new mongoose.Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create and export the Purchase model
module.exports = mongoose.model('Purchase', PurchaseSchema);
