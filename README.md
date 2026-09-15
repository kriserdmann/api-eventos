# EventHub API + Documentação

Este projeto serve a documentação e a API no mesmo domínio.

## URLs

Documentação:

```text
https://api-eventos-tau.vercel.app/
```

API:

```text
https://api-eventos-tau.vercel.app/api
```

Endpoints:

```text
GET /api/eventos
GET /api/eventos/:id
GET /api/categorias
GET /api/eventos?categoria=Tecnologia
```

## Estrutura

```text
eventhub-api/
├── data/
│   └── eventos.json
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Deploy

Substitua os arquivos do repositório por estes e faça um novo deploy no Vercel.
Não é necessário adicionar `vercel.json`.
