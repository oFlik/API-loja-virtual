const auth = require('./routesRequestBody/auth');
const errorSchemas = require('./responseSchemas/responseSchemas');

const schemas = {
  auth,
  errorSchemas,
};

module.exports = schemas;
