const express = require('express');
const productController = require("../controllers/product.controller");
const router = express.Router();


router.get('/product', productController.getProduct);
router.get('/product/:price', productController.getProductByPrices);
//router.post('/', authorController.createAuthor);
//router.put('/', authorController.updateAuthor);


module.exports = router;