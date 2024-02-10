'use strict';
const app = require('./config/basic');

require('./config/cors')(app);
require('./config/middlewares')(app);
require('./config/routes')(app);

module.exports = app;
