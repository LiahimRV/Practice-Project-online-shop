module.exports = function (product) {
  return {
    id: product.id,
    productName: product.productName,
    imageUrl: product.image,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
    description: product.description,
  };
};
