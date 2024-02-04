const index = require('../routes/indexRoutes');
const products = require('../routes/productRoutes');
const users = require('../routes/userRoutes');

module.exports = (app) => {
  app.use('/', index);
  app.use('/products', products);
  app.use('/users', users);
};
