# EventHub API

API REST para a avaliação prática de Programação Front-End.

## Endpoints

- `GET /`
- `GET /eventos`
- `GET /eventos/:id`
- `GET /categorias`
- `GET /eventos?categoria=Tecnologia`

## Executar localmente

```bash
npm install
npm start
```

## Deploy no Vercel

Importe o repositório no Vercel e faça o deploy sem adicionar `vercel.json`.
O arquivo `server.js` é o entrypoint da aplicação Express.
