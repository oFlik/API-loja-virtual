const express = require('express');
const router = express();

const productController = require('../controllers/productControllers');

const { validateProductBody } = require('../middlewares/reqBodyValidation');

router.get('/list', productController.listProducts)
router.get('/types', productController.getProductTypes);
router.post('/add', validateProductBody, productController.addProduct);
router.put('/edit/:id', validateProductBody, productController.editProduct);


module.exports = router;
