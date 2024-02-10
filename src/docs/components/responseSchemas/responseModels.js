exports.error401 = {
  description: 'Falha na autenticação',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Falha na autenticação, verificar credenciais.'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.error404 = {
  description: 'Recurso inexistente',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['O recurso acessado não existe.'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.error500 = {
  description: 'Erro no Servidor',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Erro interno no servidor. {{ Descrição do erro }}'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.duplicateEmail = {
  description: 'E-mail já cadastrado.',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Email já cadastrado. Tente efetuar o login!'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.weakPassword = {
  description: 'Senha fraca.',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: [
              'Sua senha não é forte o bastante. Lembre-se de usar no mínimo 8 caracteres, letras minúsculas, maiusculas e números.',
            ],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};

exports.missingBodyPropertie = {
  description: 'Os campos necessários para a requisição estão incompletos.',
  content: {
    'application/json': {
      schema: {
        properties: {
          message: {
            enum: ['Todos os campos devem ser preenchidos..'],
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  },
};
