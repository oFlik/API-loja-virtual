const express = require('express');
const router = express();

const { getProductTypes, addProduct, editProduct } = require('../controllers/productControllers');

const { validateProductBody } = require('../middlewares/reqBodyValidation');

router.get('/types', getProductTypes);
router.post('/add', validateProductBody, addProduct);
router.put('/edit/:id', validateProductBody, editProduct);

module.exports = router;
