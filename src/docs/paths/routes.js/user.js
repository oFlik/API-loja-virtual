exports.register = {
  post: {},
};

exports.profile = {
  get: {
    summary: 'Obter dados do usuário logado',
    description:
      'O usuário deverá estar logado para acessar esta rota, os dados retornados sempre serão do usuário logado.',
    operationId: 'getProfile',
    responses: {
      200: {
        description: 'Retorna os dados do usuário logado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                id: {
                  type: 'integer',
                },
                name: {
                  enum: ['Nome do usuário'],
                  type: 'string',
                },
                email: {
                  enum: ['E-mail do usuário'],
                  type: 'string',
                },
              },
              type: 'object',
            },
          },
        },
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
  put: {},
};
