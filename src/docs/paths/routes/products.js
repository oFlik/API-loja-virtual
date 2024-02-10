exports.add = {
  post: {
    summary: 'Efetua o cadastro de um novo produto',
    description:
      'Ao enviar as informações necessárias para um novo produto, o mesmo é cadastrado no banco de dados da aplicação.',
    operationId: 'appProduct',
    requestBody: {
      description: 'Informações do produto a ser cadastrado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqProductModel',
          },
        },
      },
      required: true,
    },
    responses: {
      201: {
        description: 'Mensagem de sucesso e dados do usuário cadastrado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  enum: ['Produto criado com sucesso!'],
                  type: 'string',
                },
                productData: {
                  $ref: '#/components/schemas/ResProductModel',
                },
              },
              type: 'object',
            },
          },
        },
      },
      400: {
        $ref: '#/components/responses/missingBodyPropertie',
      },
      401: {
        $ref: '#/components/responses/error401',
      },
      404: {
        $ref: '#/components/responses/error404',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

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
                $ref: '#/components/schemas/ResProductModel',
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

exports.edit = {};

exports.detail = {};

exports.delete = {};

exports.types = {};
