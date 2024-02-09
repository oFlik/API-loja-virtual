const servers = require('./servers/servers');
const paths = require('./paths/paths');
const schemas = require('./components/schemas');
const responses = require('./components/responses');

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
    '/': paths.index.indexPage,
    '/auth/login': paths.auth.login,
  },
  components: {
    schemas: {
      ReqBodyLogin: schemas.auth.loginReqBody,
      UserData: schemas.auth.userData,
    },
    responses: {
      error401: responses.errorModels.error401,
      error404: responses.errorModels.error404,
      error500: responses.errorModels.error500,
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
