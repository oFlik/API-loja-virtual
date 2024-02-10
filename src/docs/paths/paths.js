const index = require('./routes.js/index');
const auth = require('./routes.js/auth');
const user = require('./routes.js/user');
const client = require('./routes.js/client');
const product = require('./routes.js/products')

const paths = {
  index,
  auth,
  user,
  product,
  client,
};

module.exports = paths;
