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

exports.listProducts = async (req, res) => {
  const { productType } = req.query;

  try {
    let products = '';

    if (productType) {
      products = await knex('products').where('product_type', '=', productType);
    } else {
      products = await knex('products');
    }

    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.detailProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await knex('products').where({ id }).first();

    if (!product) {
      return res.status(404).json({ mensagem: 'Não foi possível encontrar o produto.' });
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await knex('products').where({ id }).first();

    if (!product) {
      return res.status(404).json({ message: 'Não foi possível encontrar o produto.' });
    }

    const productOrder = await knex('product_orders').where({ product: id }).first();
    if (productOrder) {
      return res
        .status(400)
        .json({ message: 'O produto esta vinculado a um pedido e não pode ser excluido' });
    }

    await knex('products').del().where({ id });

    return res
      .status(200)
      .send({ message: `Produto ${product.description} excluído com sucesso.` });
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
