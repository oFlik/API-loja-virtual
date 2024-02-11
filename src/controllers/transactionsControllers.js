const knex = require('../config/database');

exports.newTransaction = async (req, res) => {
  const { client, note, productOrders } = req.body;

  try {
    const validClient = await knex('clients').where({ id: client }).first();

    if (!validClient) {
      return res.status(404).json({ message: 'Não existe cliente com o ID informado.' });
    }

    const products = await knex('products');

    for (const order of productOrders) {
      const product = products.find((product) => product.id === order.product);

      if (!product || product.stock_count <= 0) {
        return res.status(403).json({
          mensagem: `O produto com o id ${order.product} não está disponível`,
        });
      }

      if (order.quantity > product.stock_count) {
        return res.status(403).json({
          mensagem: `O produto com o id ${order.product} possui apenas ${product.stock_count} unidades disponíveis`,
        });
      }
    }

    let totalPrice = 0;
    for (const order of productOrders) {
      const product = products.find((product) => product.id === order.product);

      totalPrice += order.quantity * product.price;

      let remainingProducts = product.stock_count - order.quantity;

      await knex('products').update({ stock_count: remainingProducts }).where('id', product.id);
    }

    const transaction = await knex('transactions')
      .insert({
        client,
        note,
        value: totalPrice,
      })
      .returning('*');

    for (const order of productOrders) {
      const product = products.find((product) => product.id === order.product);

      await knex('product_orders').insert({
        transaction: transaction[0].id,
        product: order.product,
        quantity: order.quantity,
        product_price: product.price,
      });
    }

    return res.status(201).json(transaction[0]);
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};

exports.listTransactions = async (req, res) => {
  const { client } = req.query;

  try {
    let orders;
    if (client) {
      orders = await knex('transactions').where({ client });
    } else {
      orders = await knex('transactions');
    }

    return res.status(200).json(orders);
  } catch (e) {
    return res.status(500).json({ message: `Erro no servidor: ${e.message}` });
  }
};
