const express = require('express');
const router = express();

const { register } = require('../controllers/userControllers');

const { validateRegisterBody } = require('../middlewares/userMiddlewares');

router.post('/', validateRegisterBody, register);

module.exports = router;
