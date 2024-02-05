const knex = require('../config/database');

exports.validateRegisterBody = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios!' });
  }

  next();
};

exports.validateLoginBody = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios!' });
  }

  next();
};

exports.validateProductBody = async (req, res, next) => {
  if (!req.body.description || !req.body.stockCount || !req.body.price || !req.body.productType) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const validProductType = await knex('product_types')
      .where('id', '=', req.body.productType)
      .first();

    if (!validProductType) {
      return res.status(404).json({ message: 'A categoria informada não existe' });
    }
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }

  next();
};
