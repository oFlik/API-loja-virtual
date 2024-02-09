exports.serverError = {
  500: {
    description: 'Dados do usuário cadastrado + Token de autenticação',
    content: {
      'application/json': {
        schema: {
          type: 'string',
        },
      },
    },
  },
}