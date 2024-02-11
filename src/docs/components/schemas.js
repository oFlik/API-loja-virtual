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
      enum: ['Nome do usuário'],
      type: 'string',
    },
    email: {
      enum: ['Email do usuário'],
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
      enum: ['Descrição do produto'],
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
      enum: ['Descrição do produto'],
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
      enum: ['Descrição da categoria'],
      type: 'string',
    },
  },
};

exports.reqClientModel = {
  type: 'object',
  properties: {
    name: {
      enum: ['Nome do cliente'],
      type: 'string'
    },
    email: {
      enum: ['E-mail do cliente'],
      type: 'string'
    },
    cpf: {
      enum: ['CPF do cliente'],
      type: 'string'
    }
  }
}

exports.resClientModel = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      enum: ['Nome do cliente'],
      type: 'string'
    },
    email: {
      enum: ['E-mail do cliente'],
      type: 'string'
    },
    cpf: {
      enum: ['CPF do cliente'],
      type: 'string'
    }
  }
}