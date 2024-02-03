const index = require('../routes/indexRoutes');
const products = require('../routes/productRoutes');

module.exports = (app) => {
  app.use('/', index);
  app.use('/products', products);
};
