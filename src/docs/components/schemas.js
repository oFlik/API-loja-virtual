exports.loginReqBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};

exports.registerReqBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};

exports.userData = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    name: {
      example: 'Nome do usuário',
      type: 'string',
    },
    email: {
      example: 'Email do usuário',
      type: 'string',
    },
  },
};

exports.resProductModel = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    description: {
      example: 'Descrição do produto',
      type: 'string',
    },
    stock_count: {
      type: 'integer',
    },
    price: {
      type: 'number',
    },
    product_type: {
      type: 'integer',
    },
  },
};

exports.reqProductModel = {
  type: 'object',
  properties: {
    description: {
      example: 'Descrição do produto',
      type: 'string',
    },
    stock_count: {
      type: 'integer',
    },
    price: {
      type: 'number',
    },
    product_type: {
      type: 'integer',
    },
  },
};

exports.productTypes = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    description: {
      example: 'Descrição da categoria',
      type: 'string',
    },
  },
};

exports.reqClientModel = {
  type: 'object',
  properties: {
    name: {
      example: 'Nome do cliente',
      type: 'string',
    },
    email: {
      example: 'E-mail do cliente',
      type: 'string',
    },
    cpf: {
      example: 'CPF do cliente',
      type: 'string',
    },
  },
};

exports.reqClientWithoutCpf = {
  type: 'object',
  properties: {
    name: {
      example: 'Nome do cliente',
      type: 'string',
    },
    email: {
      example: 'E-mail do cliente',
      type: 'string',
    },
  },
};

exports.resClientModel = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    name: {
      example: 'Nome do cliente',
      type: 'string',
    },
    email: {
      example: 'E-mail do cliente',
      type: 'string',
    },
    cpf: {
      example: 'CPF do cliente',
      type: 'string',
    },
  },
};

exports.reqTransactionModel = {
  type: 'object',
  properties: {
    client: {
      type: 'integer',
    },
    note: {
      example: 'Uma observação para a compra, caso exista.',
      type: 'string',
    },
    productOrders: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          product: {
            type: 'integer',
          },
          quantity: {
            type: 'integer',
          },
        },
      },
    },
  },
};

exports.resTransactionModel = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    client: {
      type: 'integer',
    },
    note: {
      type: 'string',
      example: 'Observação da compra.',
    },
    value: {
      type: 'number',
    },
  },
};
