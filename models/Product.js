const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },

    // MAIN IMAGE (for cards)
    image: { type: String },

    // MULTIPLE IMAGES (gallery)
    images: {
        type: [String],
        default: []
    },
    video: {
    type: String,
    default: ""
},

    description: { type: String },

    // Prices
    singlePrice: { type: Number },
    groupPrice: { type: Number },

    purchaseType: {
        type: String,
        enum: ["single", "group", "hybrid"],
        default: "single"
    },

    price: {
        type: Number,
        required: true
    },

    groupSize: {
        type: Number,
        default: 4
    },

    isTrending: {
        type: Boolean,
        default: false
    },
    // new added



category: {
    type: String,
    enum: ["trendy", "classy", "modest", "wedding"],
    default: "trendy"
},

    // new end

    tags: {
        type: [String],
        default: []
    },
     // 🔥 SIZES
    sizes: {
        type: [String],
        default: []
    },

    // 🔥 COLORS
    colors: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model("Product", productSchema);