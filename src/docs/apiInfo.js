const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API Ponto de Venda',
    description:
      'Uma API com todas as funcionalidades necessárias em um ponto de venda para lojas físicas.',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://api-ponto-de-venda.onrender.com',
      description: 'Server de produção',
    },
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      description: 'Server de desenvolvimento',
    },
  ],
  paths: {
    '/auth/login': {
      post: {
        summary: 'Efetuar o login de um usuário cadastrado',
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
    },
  },
};

module.exports = swaggerDocument;
