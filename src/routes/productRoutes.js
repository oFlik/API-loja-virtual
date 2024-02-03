const express = require('express');
const router = express();

const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.getProductTypes)

module.exports = router