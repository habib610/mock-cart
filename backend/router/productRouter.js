import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product.js";

const productRouter = express.Router();

productRouter.get(
    "/",
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find();
        return res.send(products);
    })
);

export default productRouter;
