const knex = require('../config/database');
const { validateEmail } = require('../helpers/clientValidations');

exports.addClient = async (req, res) => {
  const { name, email, cpf } = req.body;

  try {
    const invalidData = await knex('clients').where({ email }).orWhere({ cpf }).first();

    if (invalidData) {
      return res.status(403).json({ message: 'Email ou CPF ja cadastrados.' });
    }

    const client = await knex('clients')
      .insert({
        name,
        email,
        cpf,
      })
      .returning('*');

    return res
      .status(201)
      .json({ message: 'Cliente cadastrado com sucesso!', clientData: client[0] });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.editClient = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  if (name || email ) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Envie um email válido.' });
  }

  try {
    const clientExists = await knex('clients').where({ id }).first();

    if (!clientExists) {
      return res.status(404).json({ message: 'Não existe cliente com o ID informado.' });
    }

    const invalidData = await knex('clients')
      .where({ email })
      .andWhere('id', '<>', id)
      .first();

    if (invalidData) {
      return res.status(403).json({ message: 'Email ja cadastrado' });
    }

    const updatedClient = await knex('clients')
      .where({ id })
      .update({
        name,
        email,
        cpf,
      })
      .returning('*');

    return res
      .status(200)
      .json({ message: 'Cliente atualizado com sucesso!', clientData: updatedClient[0] });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.listClients = async (req, res) => {
  const clients = await knex('clients');

  return res.status(200).json(clients);
};

exports.detailClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await knex('clients').where({ id }).first();

    if (!client) {
      return res.status(404).json({ message: 'Não existe cliente com o ID informado.' });
    }

    return res.status(200).json(client);
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
