import express from "express";
import {
   createProduct,
   deleteProduct,
   getProduct,
   getProducts,
   updateProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/product/:id", getProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

router.post("/product/add", createProduct);

export default router;
