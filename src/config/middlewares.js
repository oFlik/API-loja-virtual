const userAuthentication = require('../middlewares/userAuthentication');

module.exports = (app) => {
  const excludeRoutes = ['/', '/auth/login', '/user/register', '/docs'];

  app.use(userAuthentication(...excludeRoutes));
};
