const express = require('express');
const router = express();

const { register, getProfile, editProfile } = require('../controllers/userControllers');

const { validateRegisterBody } = require('../middlewares/reqBodyValidation');

router.post('/register', validateRegisterBody, register);
router.get('/profile', getProfile);
router.put('/profile', editProfile);

module.exports = router;
