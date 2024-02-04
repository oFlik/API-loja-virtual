const express = require('express');
const router = express();

const { register } = require('../controllers/userControllers');

const { validateRegisterBody } = require('../middlewares/reqBodyValidation');

router.post('/register', validateRegisterBody, register);

module.exports = router;
