const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

   items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },

      name: String,
      price: Number,
      image: String,

      quantity: Number
    }
  ],

  total: Number,

  fullname: String,
  phone: String,
  address: String,
  city: String,
  notes: String,

  // status: {
  //   type: String,
  //   default: "Pending"
  // }
  status: {
  type: String,
  default: "Pending"
},

trackingNumber: {
  type: String
},  
tracking: [
  {
    status: String,
    location: String,
    note: String,
    date: { type: Date, default: Date.now }
  }
]


// tracking: [
//   {
//     status: String,
//     date: {
//       type: Date,
//       default: Date.now
//     }
//   },

  
// ]

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);                                                          