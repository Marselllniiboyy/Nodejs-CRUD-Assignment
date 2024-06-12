// Layer untuk handle request dan response
// Handle validasi body
const express = require("express");
const router = express.Router();
const prisma = require("../db/index.js");
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductByid,
  editProductById,
} = require("./product.service.js");
// testing
// router.get("/", (req, res) => {
//   res.send("hello world Baliii kuhhh router");
// });

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  // SELECT * from product
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(parseInt(productId));
    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProdutcData = req.body;
    const product = await createProduct(newProdutcData);

    res.send({
      data: product,
      message: "data success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// delete perlu id
router.delete("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    await deleteProductByid(productId);
    res.send("product deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    if (
      !(
        productData.name &&
        productData.description &&
        productData.image &&
        productData.price
      )
    ) {
      return res.status(500).send("Some fild are missing");
    }

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      dataUpdate: product,
      message: "Product edited",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      dataUpdate: product,
      message: "Product edited",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
