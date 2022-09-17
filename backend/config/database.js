import mongoose from "mongoose";

const connectDB = () => {
   mongoose.connect(process.env.MONGO_URI).then((e) => {
      console.log(`Database connection established`);
   });
};

export default connectDB;
