// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     image: { type: String }, // optional
//     description: { type: String }
// });

// module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
