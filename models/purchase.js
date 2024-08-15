const mongoose = require('mongoose');

// Define the schema for Purchase
const purchaseSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Purchase model
module.exports = mongoose.model('Purchase', purchaseSchema);
