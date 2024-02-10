exports.list = {
  get: {
    summary: 'Obtém as informações de todos os produtos cadastrados.',
    description:
      'Ao acessar esta rota, o usuário irá receber uma array contendo todas as informações sobre os produtos cadastrados no banco de dados.',
    operationId: 'getProductList',
    responses: {
      200: {
        description: 'Retorna uma array com os produtos cadastrados',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ProductModel',
              },
            },
          },
        },
      },
      401: {
        $ref: '#/components/responses/error401',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

exports.add = {};

exports.edit = {};

exports.detail = {};

exports.delete = {};

exports.types = {};
