import Products from "../models/productModel.js";

// @description  🔴  Get Products
// @route        🟠  GET /api/v1/products
// @access       🔵  Public

const getProducts = async (req, res) => {
   const products = await Products.find();
   res.status(200).json({
      success: true,
      data: products,
   });
};

// @description  🔴  Get Single Product
// @route        🟠  GET /api/v1/product/id
// @access       🔵  Public

const getProduct = async (req, res) => {
   try {
      const product = await Products.findById(req.params.id);
      if (!product) {
         res.status(500).json({ success: false, error: "Invalid Product ID" });
      }
      res.status(200).json({
         success: true,
         data: product,
      });
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};

// @description  🔴  Add Product
// @route        🟠  POST /api/v1/product/id
// @access       🔵  Private Admin

const createProduct = async (req, res) => {
   try {
      const product = await Products.create(req.body);

      res.status(201).json({
         success: true,
         data: product,
      });
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};

// @description  🔴  Update Product
// @route        🟠  Put /api/v1/product/id
// @access       🔵  Private Admin

const updateProduct = async (req, res) => {
   try {
      const product = await Products.findById(req.params.id);

      if (!product) {
         res.status(500).json({ success: false, error: "Invalid Product ID" });
      }

      const newProduct = await Products.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true, runValidator: true }
      );
      res.status(201).json({
         success: true,
         data: newProduct,
      });
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};

// @description  🔴  Delete Product
// @route        🟠  Put /api/v1/product/id
// @access       🔵  Private Admin

const deleteProduct = async (req, res) => {
   try {
      const product = await Products.findById(req.params.id);

      if (!product) {
         res.status(500).json({ success: false, error: "Invalid Product ID" });
      }

      await product.remove();

      res.status(201).json({
         success: true,
         msg: "Successfully removed the product",
      });
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};

export { getProducts, getProduct, createProduct, updateProduct ,deleteProduct};
