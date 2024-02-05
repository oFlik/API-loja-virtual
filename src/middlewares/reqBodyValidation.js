const knex = require('../config/database');
const { validateCpf, validateEmail } = require('../helpers/clientValidations');

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

exports.validateClientBody = async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.cpf) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
  }

  if (!validateCpf(req.body.cpf)) {
    return res.status(400).json({ message: 'Envie um CPF válido.' });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ message: 'Envie um email válido.' });
  }

  next();
};

exports.validateTransactionBody = (req, res, next) => {
  if (!req.body.client || !req.body.productOrders || req.body.productOrders.length < 1) {
    return res.status(400).json({ mensagem: 'Informe todos os campos obrigatórios' });
  }

  next();
};
