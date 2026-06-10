const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    email: String,
    subject: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Contact", contactSchema);