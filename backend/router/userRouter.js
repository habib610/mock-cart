import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.get(
    "/cart",
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(`690d83c14354f39cef8bbcc4`).populate(
            "cart.product",
            "name image price"
        );

        if (user) {
            return res.send(user);
        }
        return res.status(404).json({ message: `User not found` });
    })
);

export default userRouter;
