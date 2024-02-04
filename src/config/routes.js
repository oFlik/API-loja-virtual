const index = require('../routes/indexRoutes');
const product = require('../routes/productRoutes');
const user = require('../routes/userRoutes');
const auth = require('../routes/authRoutes');

module.exports = (app) => {
  app.use('/', index);
  app.use('/product', product);
  app.use('/user', user);
  app.use('/auth', auth);
};
