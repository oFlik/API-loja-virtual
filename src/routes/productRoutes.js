const express = require('express');
const router = express();

const { getProductTypes, addProduct } = require('../controllers/productControllers');

const { validateNewProductBody } = require('../middlewares/reqBodyValidation');

router.get('/types', getProductTypes);
router.post('/add', validateNewProductBody, addProduct);

module.exports = router;
