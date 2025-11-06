import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/productRouter.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log(colors.bgYellow("Connected with mongodb"));
});

const PORT = 5001;

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.json({ status: 200, message: "Hello from mock cart" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(colors.white.bgGreen(`Server is running at PORT ${PORT}`));
});
