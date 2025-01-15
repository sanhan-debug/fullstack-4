import { Router } from "express";
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from "../Controllers/productController.js";

export const productRouter = new Router()


productRouter.get("/products",getAllProducts)
productRouter.get("/products/:id",getProductById)
productRouter.put("/products/:id",updateProduct)
productRouter.post("/products",addProduct)
productRouter.delete("/products/:id",deleteProductById)
