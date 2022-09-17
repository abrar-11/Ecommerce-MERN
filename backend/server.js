import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import productRoute from "./routes/productRoute.js";
dotenv.config({ path: "backend/config/config.env" });


// Connecting to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Product Route
app.use("/api/v1/", productRoute);

// Setup Server
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
