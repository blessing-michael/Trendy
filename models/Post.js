const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: String,
  text: String,

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],

  interested: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      size: String,
      location: String,
      createdAt: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);