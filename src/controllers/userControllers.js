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

    const { password: _, ...userData } = newUser[0];

    return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', userData });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.getProfile = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await knex('users').where({ id }).first();

    const { password, ...userData } = user;

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.editProfile = async (req, res) => {
  const { name, password, email } = req.body;
  const { id } = req.user;

  if (!name || !email || !password) {
    return res.status(403).json({ message: 'Todos os campos devem ser preenchidos.' });
  }

  try {
    const validEmail = await knex('users').where({ email }).andWhere('id', '<>', id).first();

    if (validEmail) {
      return res.status(403).json({ message: 'O e-mail já está sendo usado por outro usuário' });
    }

    const hash = await bcrypt.hash(password, 10);

    await knex('users').where({ id }).update({
      name,
      email,
      password: hash,
    });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
