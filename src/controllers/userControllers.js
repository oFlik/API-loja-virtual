const knex = require('../config/database');
const bcrypt = require('bcrypt');
const { validateNewPassword } = require('../helpers/validateNewPassword');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await knex('users').where({ email }).first();

    if (userExists) {
      return res.status(403).json({ message: 'Email já cadastrado. Tente efetuar o login!' });
    }

    if (!validateNewPassword(req.body.password)) {
      return res.status(406).json({
        message: `Sua senha não é forte o bastante. Lembre-se de usar no mínimo 8 caracteres, letras minúsculas, maiusculas e números.`,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await knex('users')
      .insert({ name, email, password: hashPassword })
      .returning('*');

    const { password: userPassword, ...user } = newUser[0];

    return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', userData: user });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
