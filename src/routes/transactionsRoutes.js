const express = require('express');
const router = express();

const { newTransaction, listTransactions } = require('../controllers/transactionsControllers');
const { validateTransactionBody } = require('../middlewares/reqBodyValidation');

router.post('/new', validateTransactionBody, newTransaction);
router.get('/list', listTransactions);

module.exports = router;
