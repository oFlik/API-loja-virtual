const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../config/database');

const hash = process.env.JWT_HASH;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex('users').where({ email }).first();

    if (!user) {
      return res.status(401).json({
        message: 'Não é possivel encontrar esta conta',
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        mensagem:
          'Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para escolher outra.',
      });
    }

    const token = jwt.sign({ id: user.id }, hash, { expiresIn: '8h' });
    const { password: _, ...userData } = user;

    return res.status(200).json({ message: 'Login realizado com sucesso!', userData, token });
  } catch (e) {
    return res.status(500).json({ mensagem: `Erro interno do servidor: ${e.message}` });
  }
};
