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

exports.validateNewProductBody = (req, res, next) => {
  if (!req.body.description || !req.body.stockCount || !req.body.price || !req.body.productType) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
  }

  next();
};
