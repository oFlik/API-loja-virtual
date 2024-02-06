
# API Ponto de Venda

Uma API com todas as funcionalidades necessárias em um ponto de venda. Tais como, cadastro e atualização de usuários e controle de vendas e estoque.

## Stack utilizada

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,postgres,git)](https://skillicons.dev)



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/oFlik/API-ponto-de-venda
```


Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_CONNECTION`: A linha de conexão para o banco de dados utilizado.

`JWT_HASH`: A palavra chave para criptografia da biblioteca `JWT`.


## Roadmap

- Adicionar mais funções, tais como:
    - Cadastro de categorias
    - Detalhar uma compra específica
    - Repetir uma compra
    - Envio de emails de confirmação

- Adicionar integração com Front.
- Entre outras.



## Documentação da API

### Rotas abertas

**Retornar os dados da API**

```
  GET /
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
|  | | Nenhum parâmetro obrigatório |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Dados da API| 
| `500` | Erro no servidor | 

###
**Efetuar o registro de uma novo usuário**

```
  POST /user/register
```
| Parâmetro   | Tipo      | Obrigatório | Descrição     | Enviar via                     |
| :---------- | :--------- | :----- | :----------------- | :------------------ |
| `name` | `string` | Sim | O nome do novo usuário | `req.body` |
| `email` | `string` | Sim| O email do novo usuário | `req.body` |
| `password` | `string` | Sim | A senha do novo usuário | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `201` | Dados do usuário cadastrado | 
| `403` | Email já utilizado | 
| `406` | Senha inválida | 
| `500` | Erro no servidor | 

###
**Efetuar o login de um usuário cadastrado**

```
  POST /auth/login
```
| Parâmetro   | Tipo       | Obrigatório | Descrição     | Enviar via                     |
| :---------- | :--------- | :---- | :----------------- | :------------------ |
| `email` | `string` | Sim | O email do usuário cadastrado | `req.body` |
| `password` | `string` | Sim| A senha do usuário cadastrado | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Dados do usuário cadastrado + Token de autenticação | 
| `401` | Conta inexistente | 
| `400` | Senha inválida | 
| `500` | Erro no servidor | 


### Rotas com autenticação via Bearer Token

**Erros relacionado a autenticação. Válidos para todas as rotas abaixo:**
| Status | Retorno |
| :----------------------| :------ |  
| `401` | Falha no envio do Token | 
| `404` | Token inválido, conta inexistente. | 

###

**Listar todas as categorias de produto cadastradas**

```http
  GET /product/types
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
|  | | Nenhum parâmetro obrigatório |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Uma lista com todas as categorias de produtos cadastradas. | 
| `500` | Erro no servidor | 

###
**Listar todos os produtos cadastrados**

```http
  GET /product/list
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
|  | | Nenhum parâmetro obrigatório |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Uma lista com todos os dados dos produtos cadastrados. | 
| `500` | Erro no servidor | 

###
**Cadastrar um novo produto**

```http
  POST /product/add
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `description` | `string` | Sim | O nome ou descrição | `req.body` |
| `stockCount` | `integer` | Sim | A quantidade em estoque | `req.body` |
| `price` | `integer` | Sim | O valor em centavos | `req.body` |
| `productType` | `integer` | Sim | O id da categoria | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `201` | Dados do produto cadastrado | 
| `500` | Erro no servidor | 

###
**Editar um produto existente**

```http
  PUT /product/edit
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `description` | `string` | Sim | O nome ou descrição | `req.body` |
| `stockCount` | `integer` | Sim | A quantidade em estoque | `req.body` |
| `price` | `integer` | Sim | O valor em centavos | `req.body` |
| `productType` | `integer` | Sim | O id da categoria | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Dados do produto editado | 
| `404`| Produto não existente |
| `500` | Erro no servidor | 

###
**Detalhar um produto existente**

```http
  GET /product/detail/:id
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `id` | `string` | Sim | O Id do produto desejado | `req.params` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Dados do produto solicitado | 
| `404`| Produto não existente |
| `500` | Erro no servidor | 

###
**Excluir um produto existente**

```http
  DELETE /product/delete/:id
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `id` | `string` | Sim | O Id do produto a ser excluído | `req.params` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Mensagem de sucesso | 
| `403`| Produto não pode ser excluído |
| `404`| Produto não existente |
| `500` | Erro no servidor | 

###
**Obter dados do usuário logado**

```http
  GET /user/profile
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
|  | | Nenhum parâmetro obrigatório |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Dados do usuário logado | 
| `500` | Erro no servidor | 

###
**Editar perfil do usuário logado**

```http
  PUT /user/profile
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `name` | `string` | Sim | O nome a ser atualizado | `req.body` |
| `password` | `string` | Sim | A senha a ser atualizada | `req.body` |
| `email` | `string` | Sim | O email a ser atualizado | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Mensagem de sucesso | 
| `400`| Corpo da requisição inválido |
| `403`| O email já está em uso |
| `500` | Erro no servidor | 

###
**Cadastrar novo cliente**

```http
  POST /client/new
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `name` | `string` | Sim | O nome do novo cliente | `req.body` |
| `email` | `string` | Sim | O email do novo cliente | `req.body` |
| `cpf` | `string` | Sim | O cpf do novo cliente | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `201` | Mensagem de sucesso + dados do novo cliente | 
| `400`| E-mail ou CPF já cadastrados |
| `500` | Erro no servidor | 

###
**Editar cliente existente**

```http
  PUT /client/edit/:id
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `id` | `string` | Sim | O id do cliente a ser atualizado | `req.params` |
| `name` | `string` | Sim | O nome do cliente a ser atualizado | `req.body` |
| `email` | `string` | Sim | O email do cliente a ser atualizado | `req.body` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `201` | Mensagem de sucesso + dados atualizados | 
| `400`| E-mail inválido |
| `403`| E-mail já cadastrado |
| `404`| Cliente inexistente |
| `500` | Erro no servidor | 

###
**Listar todos os clientes cadastrados**

```http
  GET /client/list
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
|  | | Nenhum parâmetro obrigatório |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Lista com os dados de todos os clientes existentes | 
| `500` | Erro no servidor | 

###
**Cadastrar nova venda**

```http
  POST /transaction/new
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `client` | `integer` | Sim | O id do cliente que está comprando | `req.body` |
| `note` | `string` | Não | Observação sobre a venda | `req.body` |
| `productOrders` | `integer` | Sim | Uma lista contendo os produtos comprados | `req.body` |

O parâmetro `productOrders` deve ser enviado com as seguintes propriedades: \
Para cada produto comprado, enviar um objeto contendo:
| `product` | `quantity` |
| :--------------: | :--: |
| O Id do produto desejado | A quantidade desejada |


#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `201` | Dados da venda cadastrada | 
| `400` | Produto indisponível |
| `404`| Cliente inexistente |
| `500` | Erro no servidor | 

###
**Listar todas as vendas cadastradas**

```http
  GET /transaction/list
```

| Parâmetro   | Tipo       | Obrigatório     | Descrição     | Enviar via                     |
| :---------- | :--------- | :--------- | :----------------- | :------------------ |
| `client` | `integer` | Não | O id do cliente caso queria retornar apenas as compras do mesmo | `req.query` |

#### Resposta

| Status | Retorno |
| :----------------------| :------ | 
| `200` | Lista com todas as compras cadastradas | 
| `500` | Erro no servidor | 

## Suporte

Para suporte, mande um email para thiagopereiradev@outlook.com ou entre em contato via LinkedIn.

