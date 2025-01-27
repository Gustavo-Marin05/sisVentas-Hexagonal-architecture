import mongoose from "mongoose";


const SaleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //guardaremos varios productos en una array
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  totalAmount: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Sale", SaleSchema);