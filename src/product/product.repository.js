//Berkomunikasi dengan data base(ORM or raw Query)
const prisma = require("../db/index");

const findProduct = async () => {
  const product = await prisma.product.findMany();
  return product;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

const insertProduct = async (productData) => {
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: { id: parseInt(id) },
  });
  return;
};

const editProduct = async (id, productData) => {
  const product = await prisma.product.update({
    where: { id },
    data: {
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    },
  });

  return product;
};

module.exports = {
  findProduct,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
};
