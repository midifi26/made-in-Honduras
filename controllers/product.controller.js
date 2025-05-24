const productModel= require("../models/product.model.js");

const getProduct = async (req, res) => {
  const { name, price } = req.query;
  try {
    if (name) {
      product = await productModel.getAllProducts(name);
    } else if (price){
      product = await productModel.getProductByPrice();
    }else{
        product = await productModel.getAllProducts()
    }
    res.status(200).json(product); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const getProductByPrices = async (req, res) => {
    let price= req.params.price;
  try {
    if (price) {
      product = await productModel.getProductByPrices(req.params.price);
    } else {
      product = await productModel.getAllProducts();
    }
    res.status(200).json(product); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

module.exports = {
    getProduct,
    getProductByPrices
}