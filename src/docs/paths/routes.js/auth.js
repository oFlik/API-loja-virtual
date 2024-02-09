exports.login = {
  post: {
    summary: 'Efetuar o login de um usuário cadastrado',
    description:
      'O usuário deverá enviar um email e senha válidos, que foram previamente cadastrados no banco de dados da aplicação, a rota irá então verificar as informações e retornar o token de usuário utilizado para autenticação nas demais rotas que o pedem.',
    operationId: 'userLogin',
    security: {},
    requestBody: {
      description: 'Informações de login do usuário.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Login',
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
              type: 'string',
            },
          },
        },
      },
    },
  },
};
