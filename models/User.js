const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // 🛒 Add cart field
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // Make sure a Product model exists
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
});

module.exports = mongoose.model("User", userSchema);