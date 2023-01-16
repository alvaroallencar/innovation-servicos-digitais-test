<h1 align="center">
  Innovation
</h1>

<p align = "center">
Esta aplicação foi desenvolvida exclusivamente como teste pra a Innovation Serviços Digitais. 
</p>

<p align = "center">
Com esta aplicação é possível cadastrar, listar, editar e deletar produtos (CRUD). Também é possível buscar municípios do estado do Rio de Janeiro utilizando API do IBGE pra consulta de municípios ainda não cadastrados nesta aplicação. Os municípios que foram buscados alguma vez já ficam cadastrados nesta aplicação para consultas posteriores.
</p>

## **Endpoints**

- A API tem um total de 6 endpoints.

- O URL base da API é https://innovation-test.onrender.com

- Nenhuma rota precisa de autenticação.

- Na pasta raíz do repositório há um arquivo chamado workspace-insomnia.json. ele pode ser usado pra fazer testes na aplicação utilizando o Insomnia.

<h2 align ='center'> Cadastro de produto </h2>

<p>
Campos obrigatórios: name (string), category (string) e quantity (número inteiro).
</p>

`POST /products/ - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Nome do Produto",
  "category": "Categoria do Produto",
  "quantity": 1
}
```

`FORMATO DA RESPOSTA`

```json
{
  "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
  "name": "Nome do Produto",
  "category": "Categoria do Produto",
  "quantity": 1,
  "status": "ACTIVE",
  "created_at": "2023-01-15T20:04:00.260Z",
  "updated_at": "2023-01-15T20:04:00.260Z",
  "deleted_at": null
}
```

<h2 align ='center'> Edição de produto </h2>

<p>
Nenhum campo é obrigatório, mas se passados devem ter os seguintes formatos: name (string), category (string) e quantity (número inteiro).
</p>

<p>
Não é possível alterar outros campos além desses.
</p>

`PATCH /products/{id}/ - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Nome do Produto edited"
}
```

`FORMATO DA RESPOSTA`

```json
{
  "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
  "name": "Nome do Produto edited",
  "category": "Categoria do Produto",
  "quantity": 1,
  "status": "ACTIVE",
  "created_at": "2023-01-15T20:04:00.260Z",
  "updated_at": "2023-01-15T07:36:50.768Z",
  "deleted_at": null
}
```

<h2 align ='center'> Listagem de produtos </h2>

<p>
Também é possível passar o query param includeDeleted=true pra listar os itens que foram deletados (tornaram-se INACTIVE)
</p>

`GET /products/ - FORMATO DA REQUISIÇÃO`

```
Não precisa de body.
```

`FORMATO DA RESPOSTA`

```json
[
  {
    "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
    "name": "Nome do Produto edited",
    "category": "Categoria do Produto",
    "quantity": 1,
    "status": "ACTIVE",
    "created_at": "2023-01-15T20:04:00.260Z",
    "updated_at": "2023-01-15T07:36:50.768Z",
    "deleted_at": null
  },
  {
    "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
    "name": "Nome do Produto 2",
    "category": "Categoria do Produto 2",
    "quantity": 1,
    "status": "ACTIVE",
    "created_at": "2023-01-15T20:04:00.260Z",
    "updated_at": "2023-01-15T20:04:00.260Z",
    "deleted_at": null
  }
]
```

`GET /products/?includeDeleted=true - FORMATO DA REQUISIÇÃO`

```
Não precisa de body.
```

`FORMATO DA RESPOSTA`

```json
[
    {
        "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
        "name": "Nome do Produto edited",
        "category": "Categoria do Produto",
        "quantity": 1,
        "status": "ACTIVE",
        "created_at": "2023-01-15T20:04:00.260Z",
        "updated_at": "2023-01-15T07:36:50.768Z",
        "deleted_at": null
    },
    {
        "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
        "name": "Nome do Produto 2",
        "category": "Categoria do Produto 2",
        "quantity": 1,
        "status": "ACTIVE",
        "created_at": "2023-01-15T20:04:00.260Z",
        "updated_at": "2023-01-15T20:04:00.260Z",
        "deleted_at": null
    },
    {
        "id": "88a9bf16-3335-4e01-884b-05bd85231644",
        "name": "Nome do Produto 3",
        "category": "Categoria do Produto 3",
        "quantity": 1,
        "status": "INACTIVE",
        "created_at": "2023-01-15T20:04:00.260Z",
        "updated_at": "2023-01-15T07:36:50.768Z",
        "deleted_at": "2023-01-15T07:36:50.768Z"
    }
]
```

<h2 align ='center'> Listagem de um produto </h2>

<p>
Lista apenas um produto ativo.
</p>

`GET /products/{id}/ - FORMATO DA REQUISIÇÃO`

```
Não precisa de body.
```

`FORMATO DA RESPOSTA`

```json
{
  "id": "ff1fe368-2631-45ff-8ace-6037c6774c15",
  "name": "Nome do Produto edited",
  "category": "Categoria do Produto",
  "quantity": 1,
  "status": "ACTIVE",
  "created_at": "2023-01-15T20:04:00.260Z",
  "updated_at": "2023-01-15T20:04:00.260Z",
  "deleted_at": null
}
```

<h2 align ='center'> Deleção de um produto </h2>

<p>
Torna o produto inativo (INACTIVE) e salva a data da deleção.
</p>

`DELETE /products/{id}/ - FORMATO DA REQUISIÇÃO`

```
Não precisa de body.
```

`FORMATO DA RESPOSTA`

```
No body returned

```

<h2 align ='center'> Consulta de municípios </h2>

<p>
Faz a cunsulta de um município do estado do Rio de Janeiro. Não é case sensitive e não difere acentos e caracteres especiais.
</p>

<p>
O único requisito é que espaços sejam substituídos por hífen, exemplo: rio-de-janeiro
</p>

<p>
Então buscas como: rio-de-janeiro, RIO-DE-JANEIRO, Rio-dê-JaneÍro irão retornar a cidade do Rio de Janeiro.
</p>

<p>
NOTA: O internalId é o campo de ID na própria aplicação e o campo id é o ID na API do IBGE.
</p>

`GET /cities/rio-de-janeiro/ - FORMATO DA REQUISIÇÃO`

```
Não precisa de body.
```

`FORMATO DA RESPOSTA`

```json
{
  "internalId": "0d88af9f-95c3-48cd-b0b6-b079593bfd82",
  "id": 3304557,
  "name": "Rio de Janeiro"
}
```
