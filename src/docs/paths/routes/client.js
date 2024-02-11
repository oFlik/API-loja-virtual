exports.new = {
  post: {
    summary: 'Efetua o cadastro de um novo cliente',
    description:
      'Ao enviar as informações necessárias para um novo cliente, o mesmo é cadastrado no banco de dados da aplicação.',
    operationId: 'newClient',
    requestBody: {
      description: 'Informações do cliente a ser cadastrado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqClientModel',
          },
        },
      },
      required: true,
    },
    responses: {
      201: {
        description: 'Mensagem de sucesso e dados do cliente cadastrado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  enum: ['Cliente cadastrado com sucesso!'],
                  type: 'string',
                },
                clientData: {
                  $ref: '#/components/schemas/ResClientModel',
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
      403: {
        description: 'E-mail ou CPF inválido',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  enum: ['Email ou CPF ja cadastrados.'],
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
};

exports.edit = {
  put: {},
};

exports.list = {
  get: {},
};

exports.detail = {
  get: {},
};
