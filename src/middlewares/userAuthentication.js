const jwt = require('jsonwebtoken');
const knex = require('../config/database');
const routeByPass = require('../helpers/routeByPass');
const hash = process.env.JWT_HASH;

const userAuthentication = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization || authorization == 'Bearer') {
      return res.status(401).json({
        mensagem: 'Você precisa estar logado para acessar este recurso!',
      });
    }

    const token = authorization.split(' ')[1];
    const { id } = jwt.verify(token, hash);

    const validUser = await knex('users').where({ id }).first();

    if (!validUser) {
      return res.status(401).json({
        mensagem: 'Não foi possível encontrar uma conta para este usuário.',
      });
    }

    const { password, ...user } = validUser;

    req.user = user;

    next();
  } catch (e) {
    return res.status(500).json({ message: `Erro no sistema: ${e.message}` });
  }
};

module.exports = (...excludeRoutes) => routeByPass(userAuthentication, ...excludeRoutes);
