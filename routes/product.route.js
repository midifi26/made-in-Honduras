const express = require('express');
const productController = require("../controllers/product.controller");
const router = express.Router();

//http://localhost:3000/api/product?price=12
router.get('/product', productController.getProduct);
//router.get('/product/:price', productController.getProductByPrices);
//router.post('/', authorController.createAuthor);
//router.put('/', authorController.updateAuthor);


module.exports = router;