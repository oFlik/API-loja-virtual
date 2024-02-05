const knex = require('../config/database');

exports.getProductTypes = async (req, res) => {
  try {
    const productTypes = await knex('product_types');

    return res.status(200).json({ productTypes: productTypes });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.addProduct = async (req, res) => {
  const { description, stockCount, price, productType } = req.body;

  try {
    let product = await knex('products')
      .insert({
        description,
        stock_count: stockCount,
        price,
        product_type: productType,
      })
      .returning('*');

    return res
      .status(201)
      .json({ message: 'Produto criado com sucesso!', productData: product[0] });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { description, stockCount, price, productType } = req.body;

  try {
    const validProduct = await knex('products').where({ id }).first();

    if (!validProduct) {
      return res.status(404).json({ message: 'Produto não encontrado!' });
    }

    const product = await knex('products')
      .where({ id })
      .update({
        description,
        stock_count: stockCount,
        price,
        product_type: productType,
      })
      .returning('*');

    return res
      .status(200)
      .json({ message: 'Produto atualizado com sucesso', productData: product[0] });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
