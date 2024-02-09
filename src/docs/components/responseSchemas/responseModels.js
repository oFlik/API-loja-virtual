exports.error401 = {
  description: 'Falha na autenticação',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Falha na autenticação, verificar credenciais.'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.error404 = {
  description: 'Recurso inexistente',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['O recurso acessado não existe.'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.error500 = {
  description: 'Erro no Servidor',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Erro interno no servidor. {{ Descrição do erro }}'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};
