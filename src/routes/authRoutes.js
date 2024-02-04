const express = require('express');
const router = express();

const { login } = require('../controllers/authControllers');

const { validateLoginBody } = require('../middlewares/reqBodyValidation');

router.post('/login', validateLoginBody, login);

module.exports = router;
