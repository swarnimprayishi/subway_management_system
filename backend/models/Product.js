const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String, // food, grocery, bakery
    image: String
});

module.exports = mongoose.model("Product", productSchema);
