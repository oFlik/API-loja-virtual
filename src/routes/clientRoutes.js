const express = require('express');
const router = express();

const clientControllers = require('../controllers/clientControllers');

const { validateClientBody } = require('../middlewares/reqBodyValidation');

router.post('/new', validateClientBody, clientControllers.addClient);
router.put('/edit/:id', validateClientBody, clientControllers.editClient);
router.get('/list', clientControllers.listClients);
router.get('/detail/:id', clientControllers.detailClient);

module.exports = router;
