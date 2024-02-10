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
    '/user/register': paths.user.register,
    '/user/profile': paths.user.profile,
    '/product/list': '',
    '/product/add': '',
    '/product/edit/{id}': '',
    '/product/detail/{id}': '',
    '/product/delete/{id}': '',
    '/product/types': '',
    '/client/new': paths.client.new,
    '/client/edit': paths.client.edit,
    '/client/list': paths.client.list,
    '/client/detail/{clientId}': paths.client.detail,
    '/transaction/new': '',
    '/transaction/list': '',
  },
  components: {
    schemas: {
      LoginReqBody: schemas.loginReqBody,
      RegisterReqBody: schemas.registerReqBody,
      UserData: schemas.userData,
    },
    responses: {
      error401: responses.errorModels.error401,
      error404: responses.errorModels.error404,
      error500: responses.errorModels.error500,
      duplicateEmail: responses.errorModels.duplicateEmail,
      weakPassword: responses.errorModels.weakPassword,
      missingBodyPropertie: responses.errorModels.missingBodyPropertie
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
