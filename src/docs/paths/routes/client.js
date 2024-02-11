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
                  example: 'Cliente cadastrado com sucesso!',
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
                  example: 'Email ou CPF ja cadastrados.',
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
  put: {
    summary: 'Efetua a edição de um cliente existente',
    description:
      'Ao enviar as novas informações necessárias para editar um cliente, o mesmo é alterado no banco de dados da aplicação.',
    operationId: 'editClient',
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        required: true,
        description: 'Id numérico do cliente a ser editado.',
      },
    ],
    requestBody: {
      description: 'Informações do cliente a ser editado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqClientWithoutCpf',
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: 'Mensagem de sucesso e dados do cliente alterado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  example: 'Cliente atualizado com sucesso!',
                  type: 'string',
                },
                productData: {
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
        $ref: '#/components/responses/duplicateEmail',
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
    summary: 'Obtém as informações de todos os clientes cadastrados.',
    description:
      'Ao acessar esta rota, o usuário irá receber uma array contendo todas as informações sobre os clientes cadastrados no banco de dados.',
    operationId: 'getClientsList',
    responses: {
      200: {
        description: 'Retorna uma array com os clientes cadastrados',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ResClientModel',
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

exports.detail = {
  get: {
    summary: 'Obtém as informações de um cliente específico.',
    description:
      'Ao acessar esta rota, o usuário irá receber um objeto contendo todas as informações sobre o cliente selecionado.',
    operationId: 'detailClient',
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        required: true,
        description: 'Id numérico do cliente desejado.',
      },
    ],
    responses: {
      200: {
        description: 'Retorna as informações do cliente selecionado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResClientModel',
            },
          },
        },
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
