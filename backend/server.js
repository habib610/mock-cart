import colors from "colors";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.json({ status: 200, message: "Hello from mock cart" });
});

app.listen(PORT, () => {
    console.log(colors.white.bgGreen(`Server is running at PORT ${PORT}`));
});
