import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import User from "../models/User.js";
import { mapUserToUserResponse } from "../services/index.js";

const userRouter = express.Router();

userRouter.post(
    "/login",
    expressAsyncHandler(async (req, res) => {
        const body = await req.body;
        if (!body.email || !body.password)
            return res
                .status(400)
                .send({ message: "User Credential is required" });

        const { email, password } = req.body;

        const user = await User.findOne({ email: email }).populate(
            "cart.product",
            "name image price"
        );
        if (!user)
            return res
                .status(400)
                .send({ message: "Invalid email or password" });
        if (user && user.password !== password)
            return res
                .status(400)
                .send({ message: "Invalid email or password" });

        return res.send(mapUserToUserResponse(user));
    })
);
userRouter.post(
    "/cart/add",
    expressAsyncHandler(async (req, res) => {
        const body = req.body;

        if (!body.productId || !body.userId)
            return res
                .status(400)
                .send({ message: "ProductId or userId is missing" });

        const user = await User.findById(body.userId).populate(
            "cart.product",
            "name image price"
        );

        if (!user) return res.status(404).send({ message: "User not found" });

        const product = await Product.findById(body.productId);
        if (!product)
            return res.status(404).send({ message: "Product not found" });

        const isExisting = user.cart.find(
            (cartItem) =>
                cartItem.product &&
                cartItem.product._id.toString() === body.productId
        );

        if (isExisting)
            return res
                .status(400)
                .send({ message: "Product already exists in cart" });

        user.cart.push({ qty: 1, product: product._id });

        const savedUser = await user.save();

        await savedUser.populate("cart.product", "name image price");

        res.send(mapUserToUserResponse(savedUser));
    })
);
userRouter.put(
    "/cart/increment",
    expressAsyncHandler(async (req, res) => {
        const body = req.body;

        if (!body.productId || !body.userId)
            return res
                .status(400)
                .send({ message: "ProductId or userId is missing" });

        const user = await User.findById(body.userId).populate(
            "cart.product",
            "name image price"
        );

        if (!user) return res.status(404).send({ message: "User not found" });

        const product = await Product.findById(body.productId);
        if (!product)
            return res.status(404).send({ message: "Product not found" });

        const isExisting = user.cart.find(
            (cartItem) =>
                cartItem.product &&
                cartItem.product._id.toString() === body.productId
        );

        if (!isExisting)
            return res
                .status(400)
                .send({ message: "Product is not exists in cart" });

        isExisting.qty += 1;

        const savedUser = await user.save();

        await savedUser.populate("cart.product", "name image price");

        res.send(mapUserToUserResponse(savedUser));
    })
);
userRouter.put(
    "/cart/decrement",
    expressAsyncHandler(async (req, res) => {
        const body = req.body;

        if (!body.productId || !body.userId)
            return res
                .status(400)
                .send({ message: "ProductId or userId is missing" });

        const user = await User.findById(body.userId).populate(
            "cart.product",
            "name image price"
        );

        if (!user) return res.status(404).send({ message: "User not found" });

        const product = await Product.findById(body.productId);
        if (!product)
            return res.status(404).send({ message: "Product not found" });

        const itemIndex = user.cart.findIndex(
            (c) => c.product?._id?.toString() === body.productId.toString()
        );
        if (itemIndex === -1)
            return res
                .status(400)
                .send({ message: "Product is not exists in cart" });

        if (user.cart[itemIndex].qty > 1) {
            user.cart[itemIndex].qty -= 1;
        } else {
            user.cart.splice(itemIndex, 1);
        }

        const savedUser = await user.save();

        await savedUser.populate("cart.product", "name image price");

        res.send(mapUserToUserResponse(savedUser));
    })
);

userRouter.delete(
    "/cart/remove",
    expressAsyncHandler(async (req, res) => {
        const body = req.body;

        if (!body.productId || !body.userId)
            return res
                .status(400)
                .send({ message: "ProductId or userId is missing" });

        const user = await User.findById(body.userId).populate(
            "cart.product",
            "name image price"
        );

        if (!user) return res.status(404).send({ message: "User not found" });

        const product = await Product.findById(body.productId);
        if (!product)
            return res.status(404).send({ message: "Product not found" });

        const itemIndex = user.cart.findIndex(
            (c) => c.product?._id?.toString() === body.productId.toString()
        );
        if (itemIndex === -1)
            return res
                .status(400)
                .send({ message: "Product is not exists in cart" });

        user.cart.splice(itemIndex, 1);

        const savedUser = await user.save();

        await savedUser.populate("cart.product", "name image price");

        res.send(mapUserToUserResponse(savedUser));
    })
);

userRouter.get(
    "/cart",
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(`690d83c14354f39cef8bbcc4`).populate(
            "cart.product",
            "name image price"
        );

        if (user) {
            return res.send(user.cart);
        }
        return res.status(404).json({ message: `User not found` });
    })
);

export default userRouter;
