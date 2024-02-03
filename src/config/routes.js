const index = require('../routes/indexRoutes');

module.exports = (app) => {
  app.use('/', index);
};
