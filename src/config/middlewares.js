const userAuthentication = require('../middlewares/userAuthentication');

module.exports = (app) => {
  const excludeRoutes = ['/', '/auth/login', '/user/register'];

  app.use(userAuthentication(...excludeRoutes));
};
