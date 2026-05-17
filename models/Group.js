const mongoose = require("mongoose");

const groupBuySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  size: {
    type: Number,
    required: true
  },

  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  status: {
    type: String,
    default: "open" // open | full
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("GroupBuy", groupBuySchema);