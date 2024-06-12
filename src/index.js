// ngodingnya besok gesss yaaa
const express = require("express");
const dotenv = require("dotenv");
const productController = require("./product/product.controller.js");

const app = express();

// untuk ngebaca file env
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/products", productController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
