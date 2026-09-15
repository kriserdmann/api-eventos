const express = require("express");
const cors = require("cors");
const eventos = require("./data/eventos.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    nome: "EventHub API",
    versao: "1.0.0",
    endpoints: [
      "GET /eventos",
      "GET /eventos/:id",
      "GET /categorias",
      "GET /eventos?categoria=Tecnologia"
    ]
  });
});

app.get("/eventos", (req, res) => {
  const { categoria } = req.query;

  if (!categoria) {
    return res.json(eventos);
  }

  const filtrados = eventos.filter(
    (evento) =>
      evento.categoria.toLowerCase() === categoria.toLowerCase()
  );

  return res.json(filtrados);
});

app.get("/eventos/:id", (req, res) => {
  const id = Number(req.params.id);
  const evento = eventos.find((evento) => evento.id === id);

  if (!evento) {
    return res.status(404).json({
      erro: "Evento não encontrado"
    });
  }

  return res.json(evento);
});

app.get("/categorias", (req, res) => {
  const categorias = [
    ...new Set(eventos.map((evento) => evento.categoria))
  ];

  return res.json(categorias);
});

module.exports = app;
