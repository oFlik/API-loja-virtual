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
    const validProductType = await knex('product_types').where('id', '=', productType).first();
    if (!validProductType) {
      return res.status(404).json({ message: 'A categoria informada não existe' });
    }

    let newProduct = await knex('products')
      .insert({
        description,
        stock_count: stockCount,
        price,
        product_type: productType,
      })
      .returning('*');

    const id = newProduct[0].id;

    return res
      .status(201)
      .json({ message: 'Produto criado com sucesso!', productData: newProduct[0] });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
