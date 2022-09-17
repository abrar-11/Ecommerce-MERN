import mongoose from "mongoose";

const productSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please Enter Product Name"],
   },
   description: {
      type: String,
      required: [true, "Please Enter Product Description"],
   },
   price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
      maxLength: [8, "Price Cannor exceed 8 Characters"],
   },
   rating: {
      type: Number,
      default: 0,
   },
   images: [
      {
         publicId: {
            type: String,
            required: [true, "Please Provide Product Image Public Id"],
         },
         url: {
            type: String,
            required: [true, "Please Provide Product Image url"],
         },
      },
   ],
   category: {
      type: String,
      required: [true, "Please Provide Category"],
   },
   stock: {
      type: Number,
      required: [true, "Please Enter Product Stock"],
      default: 1,
   },
   numOfReviews: {
      type: Number,
      default: 0,
   },
   reviews: [
      {
         name: {
            type: String,
            required: true,
         },
         rating: {
            type: Number,
            required: true,
         },
         comment: {
            type: String,
            required: true,
         },
      },
   ],
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

export const model = mongoose.model("Product", productSchema);
