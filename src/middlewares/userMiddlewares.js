const { validateNewPassword } = require('../helpers/validateNewPassword');

exports.validateRegisterBody = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Envie todos os campos obrigatórios!' });
  }

  next();
};
