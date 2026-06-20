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
    isAdmin: {
  type: Boolean,
  default: false
},

    // 🛒 CART
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },

            quantity: {
                type: Number,
                default: 1,
            },

            // 🔥 GROUP BUY FLAG
            isGroupBuy: {
                type: Boolean,
                default: false,
            },
             // 🔥 ADD THESE
        size: {
            type: String,
            default: "",
        },

        color: {
            type: String,
            default: "",
        },
        
        },
    ],

});

module.exports = mongoose.model("User", userSchema);