const knex = require('../config/database');
const { validateEmail, validateCpf } = require('../middlewares/clientValidations');

exports.addClient = async (req, res) => {
  const { name, email, cpf } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Envie um e-mail válido.' });
  }

  if (!validateCpf(cpf)) {
    return res.status(400).json({ message: 'Envie um CPF válido..' });
  }

  try {
    const validClient = await knex('clients').where({ email }).orWhere({ cpf }).first();

    if (validClient) {
      return res.status(400).json({ mensagem: 'Email ou CPF ja cadastrados.' });
    }

    const client = await knex('clientes')
      .insert({
        name,
        email,
        cpf,
      })
      .returning('*');

    return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', clientData: client });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
