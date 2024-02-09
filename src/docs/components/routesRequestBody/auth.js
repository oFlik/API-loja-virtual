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
