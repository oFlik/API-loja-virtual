exports.register = {
  post: {
    summary: 'Efetua o cadastro de um novo usuário',
    description:
      'O usuário deverá enviar nome, email e senha para cadastro, caso o email enviado já exista no banco de dados da aplicação, o cliente será convidado a enviar outro ou efetuar o login.',
    operationId: 'userRegister',
    security: {},
    requestBody: {
      description: 'Informações do usuário a ser cadastrado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RegisterReqBody',
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
                  enum: ['Cliente cadastrado com sucesso!'],
                  type: 'string',
                },
                userData: {
                  $ref: '#/components/schemas/UserData',
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
      403: {
        $ref: '#/components/responses/duplicateEmail',
      },
      406: {
        $ref: '#/components/responses/weakPassword',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

exports.profile = {
  get: {
    summary: 'Obtém dados do usuário logado',
    description:
      'O usuário deverá estar logado para acessar esta rota, os dados retornados sempre serão do usuário logado.',
    operationId: 'getProfile',
    responses: {
      200: {
        description: 'Retorna os dados do usuário logado.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UserData',
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
  put: {
    summary: 'Edita o cadastro de um usuário existente',
    description:
      'O usuário deverá enviar nome, email e senha para edição, caso o email enviado já exista no banco de dados da aplicação no cadastro de outro usuário, não será possível efetuar a edição.',
    operationId: 'editProfile',
    requestBody: {
      description: 'Informações do usuário a serem editadas.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RegisterReqBody',
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: 'Mensagem de sucesso.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  enum: ['Cliente cadastrado com sucesso!'],
                  type: 'string',
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
      406: {
        $ref: '#/components/responses/weakPassword',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};
