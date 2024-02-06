const index = require('../routes/indexRoutes');
const product = require('../routes/productRoutes');
const user = require('../routes/userRoutes');
const auth = require('../routes/authRoutes');
const client = require('../routes/clientRoutes');
const transaction = require('../routes/transactionsRoutes');
const docs = require('../routes/docRoutes')

module.exports = (app) => {
  app.use('/', index);
  app.use('/product', product);
  app.use('/user', user);
  app.use('/auth', auth);
  app.use('/client', client);
  app.use('/transaction', transaction);
  app.use('/docs', docs)
};
