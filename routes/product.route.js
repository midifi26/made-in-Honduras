const express = require('express');
const productController = require("../controllers/product.controller");
const { getProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/product', productController.getProduct);
//router.post('/', authorController.createAuthor);
//router.put('/', authorController.updateAuthor);


module.exports = router;