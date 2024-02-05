const express = require('express');
const router = express();

const { addClient, editClient } = require('../controllers/clientControllers');

const { validateClientBody } = require('../middlewares/reqBodyValidation');

router.post('/new', validateClientBody, addClient);
router.put('/edit/:id', validateClientBody, editClient);

module.exports = router;
