const knex = require('../config/database');

exports.getProductTypes = async (req, res) => {
  const productTypes = await knex('product_types');

  return res.status(200).json({ categorias: productTypes });
};