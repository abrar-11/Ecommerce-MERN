import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
