const express = require('express');
const router = express();

const { getProductTypes } = require('../controllers/productControllers');

router.get('/', getProductTypes);

module.exports = router;
