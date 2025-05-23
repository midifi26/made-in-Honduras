const product = require("../models/product.model.js");

const getProduct = async (req, res) => {
  let product;
  try {
    if (name) {
      product = await product.getAllProducts(name);
    } else if (price){
      product = await product.getProductByPrice();
    }else{
        product = await product.getAllProducts
    }
    res.status(200).json(product); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

module.exports = {
    getProduct
}