const express = require('express');
const router = express();

const productController = require('../controllers/productControllers');

const { validateProductBody } = require('../middlewares/reqBodyValidation');

router.get('/list', productController.listProducts);
router.post('/add', validateProductBody, productController.addProduct);
router.put('/edit/:id', validateProductBody, productController.editProduct);
router.get('/detail/:id', productController.detailProduct);

router.get('/types', productController.getProductTypes);

module.exports = router;
