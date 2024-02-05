const express = require('express');
const router = express();

const { addClient } = require('../controllers/clientControllers');

router.post('/new', addClient);

module.exports = router;
