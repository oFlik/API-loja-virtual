exports.indexPage = {
  get: {
    summary: 'Página inicial da aplicação.',
    description: 'A página inicial da aplicação, contém informações pertinentes à mesma.',
    operationId: 'index',
    security: {},
    responses: {
      200: {
        description: 'Sucesso: Retorna os dados da Aplicação',
        content: {
          'application/json': {
            schema: {
              properties: {
                name: {
                  enum: ['API Loja Virtual'],
                  type: 'string',
                },
                about: {
                  enum: ['Uma API com todas as funcionalidades necessárias em uma loja virtual.'],
                  type: 'string',
                },
              },
              type: 'object',
            },
          },
        },
      },
    },
  },
};
