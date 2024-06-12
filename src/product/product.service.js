// Service leyer bertujuan untuk handle busines logic
const prisma = require("../db");
const {
  findProduct,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProduct();
  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw Error("Product not found");
  }
  return product;
};

const createProduct = async (newproductData) => {
  const product = await insertProduct(newproductData);
  return product;
};

const deleteProductByid = async (id) => {
  await getProductById(id);
  await deleteProduct(id);
  return;
};

const editProductById = async (id, productData) => {
  await getProductById(id);

  const product = await editProduct(id, productData);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductByid,
  editProductById,
};
