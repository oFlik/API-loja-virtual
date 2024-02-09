const servers = require('./servers/servers');
const paths = require('./paths/paths');
const schemas = require('./components/schemas');

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API Ponto de Venda',
    description:
      'Uma API com todas as funcionalidades necessárias em um ponto de venda para lojas físicas.',
    version: '1.0.0',
  },
  security: [{ userToken: [] }],
  servers,
  paths: {
    '/auth/login': paths.auth.login,
  },
  components: {
    schemas: {
      Login: schemas.auth.loginReqBody,
    },
    securitySchemes: {
      userToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

module.exports = swaggerDocument;
