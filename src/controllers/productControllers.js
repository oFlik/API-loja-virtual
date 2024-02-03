const knex = require('../config/database');

exports.getProductTypes = async (req, res) => {
  try {
    const productTypes = await knex('product_types');

    return res.status(200).json({ productTypes: productTypes });
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};
