const productModel = require("../models/product.model.js");
const { validateSortField, validateSortOrder } = require('../utils/validate.js');

const getProduct = async (req, res) => {
  try {
    const { name, price, name_provider, sortField, sortOrder } = req.query;
    console.log('Parámetros recibidos:', { name, price, sortField, sortOrder });

    const validField = validateSortField(sortField);
    const validOrder = validateSortOrder(sortOrder);
    console.log('Parámetros validados:', { validField, validOrder });

    let products;

    if (name) {
      products = await productModel.getProductByName(name, validField, validOrder);
    } else if (price) {
      products = await productModel.getProductByPrices(price, validField, validOrder);
    } else if (name_provider) {
      products = await productModel.getProductByProvider(name_provider, validField, validOrder);
    }else {
      products = await productModel.getAllProducts(validField, validOrder);
    }
    console.log('Productos obtenidos:', products);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error en getProduct:', error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getProduct
};

