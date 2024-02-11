exports.new = {
  post: {
    summary: 'Efetua uma transação de venda de produtos',
    description:
      'É necessário enviar no corpo da requisição: o cliente que está efetuando a compra, uma observação, caso exista, e uma lista dos produtos a serem comprados, juntamente com suas quantidades.',
    operationId: 'newTransaction',
    requestBody: {
      description: 'Informações da venda a ser cadastrada.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqTransactionModel',
          },
        },
      },
      required: true,
    },
    responses: {
      201: {
        description: 'Dados da compra cadastrada.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResTransactionModel',
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
      403: {
        description: 'Produto com estoque insuficiente.',
        content: {
          'application/json': {
            schema: {
              type: 'string',
              example: `O produto com o id ({ id }} não está disponível`,
            },
          },
        },
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
    summary: 'Obtém as informações de todas as vendas cadastrados.',
    description:
      'Ao acessar esta rota, o usuário irá receber uma array contendo todas as informações sobre as vendas cadastradas no banco de dados.',
    operationId: 'getTransactionList',
    parameters: [
      {
        in: 'query',
        name: 'client',
        type: 'integer',
        description: 'Id numérico de um cliente para retornar apenas as compras do mesmo.',
      },
    ],
    responses: {
      200: {
        description: 'Retorna uma array com as vendas cadastrados',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ResTransactionModel',
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
