exports.login = {
  post: {
    summary: 'Efetua o login de um usuário cadastrado',
    description:
      'O usuário deverá enviar um email e senha válidos, que foram previamente cadastrados no banco de dados da aplicação, a rota irá então verificar as informações e retornar o token de usuário utilizado para autenticação nas demais rotas que o pedem.',
    operationId: 'userLogin',
    security: {},
    requestBody: {
      description: 'Informações de login do usuário.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/LoginReqBody',
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: 'Dados do usuário cadastrado + Token de autenticação',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  enum: ['Login realizado com sucesso!'],
                  type: 'string',
                },
                userData: {
                  $ref: '#/components/schemas/UserData',
                },
                token: {
                  enum: ['Token de autenticação'],
                  type: 'string',
                },
              },
              type: 'object',
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
