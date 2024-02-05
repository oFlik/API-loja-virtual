'use strict';
const app = require('./config/basic');

require('./config/middlewares')(app);
require('./config/routes')(app);

module.exports = app;
