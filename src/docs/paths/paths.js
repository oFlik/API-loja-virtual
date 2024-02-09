const index = require('./routes.js/index');
const auth = require('./routes.js/auth');
const user = require('./routes.js/user');
const client = require('./routes.js/client');

const paths = {
  index,
  auth,
  user,
  client,
};

module.exports = paths;
