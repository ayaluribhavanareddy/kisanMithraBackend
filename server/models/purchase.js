// models/Purchase.js
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    // Define your schema fields here
    itemName: String,
    quantity: Number,
    price: Number,
    date: { type: Date, default: Date.now }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
