import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";

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

        let response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            cart: user.cart.map((product) => ({
                productId: product.product._id,
                name: product.product.name,
                image: product.product.image,
                price: product.product.price,
                qty: product.qty,
            })),
        };
        return res.send(response);
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
