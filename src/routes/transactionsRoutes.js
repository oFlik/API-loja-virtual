const express = require('express');
const router = express();

const { newTransaction } = require('../controllers/transactionsControllers');
const { validateTransactionBody } = require('../middlewares/reqBodyValidation');

router.post('/new', validateTransactionBody, newTransaction);

module.exports = router;
