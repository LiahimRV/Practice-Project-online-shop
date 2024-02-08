const Product = require("../models/Product");

//add
function addProduct(product) {
  return Product.create(product);
}

//edit
async function editProduct(id, product) {
  const updateProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
  });
  return updateProduct;
}

//delete
function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

//get list width pag and search
async function getProducts(search = "") {
  const products = await Product.find({
    productName: { $regex: search, $options: "i" },
  }).sort({ createdAt: -1 });

  return products;
}

//get product
function getProduct(id) {
  return Product.findById(id);
}

module.exports = {
  addProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getProducts,
};
