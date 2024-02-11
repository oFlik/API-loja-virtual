exports.add = {
  post: {
    summary: 'Efetua o cadastro de um novo produto',
    description:
      'Ao enviar as informações necessárias para um novo produto, o mesmo é cadastrado no banco de dados da aplicação.',
    operationId: 'addProduct',
    requestBody: {
      description: 'Informações do produto a ser cadastrado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqProductModel',
          },
        },
      },
      required: true,
    },
    responses: {
      201: {
        description: 'Mensagem de sucesso e dados do produto cadastrado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  example: 'Produto criado com sucesso!',
                  type: 'string',
                },
                productData: {
                  $ref: '#/components/schemas/ResProductModel',
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
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

exports.list = {
  get: {
    summary: 'Obtém as informações de todos os produtos cadastrados.',
    description:
      'Ao acessar esta rota, o usuário irá receber uma array contendo todas as informações sobre os produtos cadastrados no banco de dados.',
    operationId: 'getProductList',
    responses: {
      200: {
        description: 'Retorna uma array com os produtos cadastrados',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ResProductModel',
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

exports.edit = {
  put: {
    summary: 'Efetua a edição de um produto existente',
    description:
      'Ao enviar as novas informações necessárias para editar um produto, o mesmo é alterado no banco de dados da aplicação.',
    operationId: 'editProduct',
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        required: true,
        description: 'Id numérico do produto a ser editado.',
      },
    ],
    requestBody: {
      description: 'Informações do produto a ser editado.',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ReqProductModel',
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: 'Mensagem de sucesso e dados do produto alterado.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  example: 'Produto atualizado com sucesso',
                  type: 'string',
                },
                productData: {
                  $ref: '#/components/schemas/ResProductModel',
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
      404: {
        $ref: '#/components/responses/error404',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

exports.detail = {
  get: {
    summary: 'Obtém as informações de um produto específico.',
    description:
      'Ao acessar esta rota, o usuário irá receber um objeto contendo todas as informações sobre o produto selecionado.',
    operationId: 'detailProduct',
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        required: true,
        description: 'Id numérico do produto desejado.',
      },
    ],
    responses: {
      200: {
        description: 'Retorna as informações do produto selecionado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResProductModel',
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

exports.delete = {
  delete: {
    summary: 'Exclui um produto específico do banco de dados.',
    description:
      'O usuário seleciona um produto a ser excluído através de seu id, via parâmetro de rota e as informações do mesmo são apagadas do banco de dados.',
    operationId: 'deleteProduct',
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        required: true,
        description: 'Id numérico do produto a ser excluído.',
      },
    ],
    responses: {
      202: {
        description: 'Retorna uma mensagem informando o produto que foi excluído.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResProductModel',
            },
          },
        },
      },
      403: {
        description: 'O produto não pode ser excluído pois está vinculado a um pedido.',
        content: {
          'application/json': {
            schema: {
              properties: {
                message: {
                  example: 'O produto esta vinculado a um pedido e não pode ser excluido',
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
      404: {
        $ref: '#/components/responses/error404',
      },
      500: {
        $ref: '#/components/responses/error500',
      },
    },
  },
};

exports.types = {
  get: {
    summary: 'Obtém uma array com as categorias de produto cadastradas.',
    description:
      'Ao acessar esta rota, o usuário irá receber uma array contendo todas as categorias de produto existentes no banco de dados da aplicação.',
    operationId: 'getProductTypes',
    responses: {
      200: {
        description: 'Retorna as categorias de produto existentes.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ProductTypes'
              }
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
