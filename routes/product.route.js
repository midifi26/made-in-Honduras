const express = require('express');
const productController = require("../controllers/product.controller");
const router = express.Router();

//http://localhost:3000/api/product
//http://localhost:3000/api/product?name=miel
//http://localhost:3000/api/product?name_provider=cafe
//http://localhost:3000/api/product?price=12
router.get('/product', productController.getProduct);


module.exports = router;