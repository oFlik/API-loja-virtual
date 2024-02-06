const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/apiInfo');

const router = express();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
