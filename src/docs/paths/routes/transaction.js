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
              example: `O produto com o id ({ id }} não está disponível`
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
  get: {},
};
