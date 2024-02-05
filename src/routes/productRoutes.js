const express = require('express');
const router = express();

const { getProductTypes } = require('../controllers/productControllers');

router.get('/types', getProductTypes);

module.exports = router;
