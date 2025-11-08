import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: [
        {
            qty: {
                type: Number,
                required: true,
                default: 1,
            },
            product: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        },
    ],
});

const User = mongoose.model("User", userSchema);

export default User;
