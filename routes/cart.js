// routes/cart.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 🛒 Add to Cart Route
router.post("/cart/add/:productId", async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: "Please log in to add to cart" });
        }

        const user = await User.findOne({ username: req.session.user });
        const productId = req.params.productId;

        // Check if product already in cart
        const existingItem = user.cart.find(
            (item) => item.productId.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += 1; // increase quantity
        } else {
            user.cart.push({ productId });
        }

        await user.save();

        res.status(200).json({ message: "Product added to cart", cart: user.cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;
